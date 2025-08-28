#!/usr/bin/env node

/**
 * NoteWise AI Evaluation Test Runner
 * 
 * This script evaluates AI model responses against a predefined dataset
 * by comparing actual responses with expected answers using a judge prompt.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    datasetPath: path.join(__dirname, 'dataset.json'),
    judgePromptPath: path.join(__dirname, 'judge-prompt.md'),
    apiEndpoint: process.env.AI_API_ENDPOINT || 'https://api.openai.com/v1/chat/completions',
    apiKey: process.env.AI_API_KEY || 'your-api-key-here',
    model: process.env.AI_MODEL || 'gpt-3.5-turbo',
    temperature: parseFloat(process.env.AI_TEMPERATURE) || 0.7,
    maxRetries: 3,
    retryDelay: 1000
};

/**
 * Load and parse the evaluation dataset
 */
function loadDataset() {
    try {
        const data = fs.readFileSync(CONFIG.datasetPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('❌ Error loading dataset:', error.message);
        process.exit(1);
    }
}

/**
 * Load the judge prompt template
 */
function loadJudgePrompt() {
    try {
        return fs.readFileSync(CONFIG.judgePromptPath, 'utf8');
    } catch (error) {
        console.error('❌ Error loading judge prompt:', error.message);
        process.exit(1);
    }
}

/**
 * Send a question to the AI API
 */
async function askAI(question) {
    const messages = [
        {
            role: "user",
            content: question
        }
    ];

    const requestBody = {
        model: CONFIG.model,
        messages: messages,
        max_tokens: 150,
        temperature: CONFIG.temperature
    };

    try {
        const response = await fetch(CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Log token usage
        if (data.usage && data.usage.total_tokens) {
            console.log(`📊 Token Usage: ${data.usage.total_tokens} tokens (Prompt: ${data.usage.prompt_tokens || 'N/A'}, Completion: ${data.usage.completion_tokens || 'N/A'})`);
        } else {
            console.log(`📊 Token Usage: Not available in response`);
        }
        
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error(`❌ Error asking AI: ${error.message}`);
        return null;
    }
}

/**
 * Evaluate AI response using the judge prompt
 */
async function evaluateResponse(question, aiAnswer, expectedAnswer) {
    const judgePrompt = loadJudgePrompt();
    
    const evaluationPrompt = `${judgePrompt}

Please evaluate the following response:

Question: "${question}"
AI Answer: "${aiAnswer}"
Expected Answer: "${expectedAnswer}"

Please respond with only the JSON result:`;

    const messages = [
        {
            role: "system",
            content: "You are an AI evaluation judge. Respond only with valid JSON in the specified format."
        },
        {
            role: "user",
            content: evaluationPrompt
        }
    ];

    const requestBody = {
        model: CONFIG.model,
        messages: messages,
        max_tokens: 200,
        temperature: CONFIG.temperature
    };

    try {
        const response = await fetch(CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Judge API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Log token usage for judge evaluation
        if (data.usage && data.usage.total_tokens) {
            console.log(`📊 Judge Token Usage: ${data.usage.total_tokens} tokens (Prompt: ${data.usage.prompt_tokens || 'N/A'}, Completion: ${data.usage.completion_tokens || 'N/A'})`);
        } else {
            console.log(`📊 Judge Token Usage: Not available in response`);
        }
        
        const judgeResponse = data.choices[0].message.content.trim();
        
        // Try to parse JSON response
        try {
            return JSON.parse(judgeResponse);
        } catch (parseError) {
            console.warn(`⚠️  Could not parse judge response as JSON: ${judgeResponse}`);
            // Fallback: manual evaluation
            return {
                question: question,
                answer: aiAnswer,
                expected: expectedAnswer,
                result: aiAnswer.toLowerCase().includes(expectedAnswer.toLowerCase()) ? "correct" : "incorrect"
            };
        }
    } catch (error) {
        console.error(`❌ Error evaluating response: ${error.message}`);
        return {
            question: question,
            answer: aiAnswer,
            expected: expectedAnswer,
            result: "error"
        };
    }
}

/**
 * Run a single test case
 */
async function runTest(testCase, index) {
    console.log(`\n🧪 Running Test ${index + 1}/${testCase.length}`);
    console.log(`Question: ${testCase.question}`);
    console.log(`Expected: ${testCase.expected}`);
    
    // Ask AI
    console.log('🤖 Asking AI...');
    const aiAnswer = await askAI(testCase.question);
    
    if (!aiAnswer) {
        console.log('❌ Failed to get AI response');
        return {
            question: testCase.question,
            answer: "ERROR",
            expected: testCase.expected,
            result: "error"
        };
    }
    
    console.log(`AI Answer: ${aiAnswer}`);
    
    // Evaluate response
    console.log('⚖️  Evaluating response...');
    const evaluation = await evaluateResponse(testCase.question, aiAnswer, testCase.expected);
    
    console.log(`Result: ${evaluation.result.toUpperCase()}`);
    return evaluation;
}

/**
 * Display test results summary
 */
function displayResults(results) {
    console.log('\n' + '='.repeat(60));
    console.log('📊 TEST RESULTS SUMMARY');
    console.log('='.repeat(60));
    
    const total = results.length;
    const correct = results.filter(r => r.result === 'correct').length;
    const incorrect = results.filter(r => r.result === 'incorrect').length;
    const errors = results.filter(r => r.result === 'error').length;
    const accuracy = total > 0 ? ((correct / total) * 100).toFixed(1) : 0;
    
    console.log(`Total Tests: ${total}`);
    console.log(`✅ Correct: ${correct}`);
    console.log(`❌ Incorrect: ${incorrect}`);
    console.log(`⚠️  Errors: ${errors}`);
    console.log(`📈 Accuracy: ${accuracy}%`);
    
    console.log('\n📋 Detailed Results:');
    console.log('-'.repeat(60));
    
    results.forEach((result, index) => {
        const status = result.result === 'correct' ? '✅' : 
                      result.result === 'incorrect' ? '❌' : '⚠️';
        console.log(`${status} Test ${index + 1}: ${result.question}`);
        console.log(`   AI Answer: ${result.answer}`);
        console.log(`   Expected: ${result.expected}`);
        console.log(`   Result: ${result.result.toUpperCase()}`);
        console.log('');
    });
}

/**
 * Main test runner function
 */
async function runTests() {
    console.log('🚀 Starting NoteWise AI Evaluation Tests');
    console.log('='.repeat(60));
    
    // Load dataset
    console.log('📂 Loading evaluation dataset...');
    const dataset = loadDataset();
    console.log(`📊 Loaded ${dataset.length} test cases`);
    
    // Check API configuration
    if (CONFIG.apiKey === 'your-api-key-here') {
        console.log('⚠️  Warning: Using default API key. Set AI_API_KEY environment variable for production use.');
    }
    
    // Log configuration
    console.log(`🌡️  Temperature: ${CONFIG.temperature}`);
    
    const results = [];
    
    // Run tests sequentially
    for (let i = 0; i < dataset.length; i++) {
        const testCase = dataset[i];
        const result = await runTest(testCase, i);
        results.push(result);
        
        // Add delay between requests to avoid rate limiting
        if (i < dataset.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    // Display results
    displayResults(results);
    
    // Save results to file
    const resultsPath = path.join(__dirname, 'test-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\n💾 Results saved to: ${resultsPath}`);
    
    // Exit with appropriate code
    const hasErrors = results.some(r => r.result === 'error');
    const allIncorrect = results.every(r => r.result === 'incorrect');
    
    if (hasErrors) {
        console.log('\n⚠️  Tests completed with errors');
        process.exit(2);
    } else if (allIncorrect) {
        console.log('\n❌ All tests failed');
        process.exit(1);
    } else {
        console.log('\n✅ Tests completed successfully');
        process.exit(0);
    }
}

/**
 * Handle script execution
 */
if (require.main === module) {
    // Check if fetch is available (Node.js 18+)
    if (typeof fetch === 'undefined') {
        console.error('❌ Error: fetch is not available. Please use Node.js 18+ or install node-fetch.');
        process.exit(1);
    }
    
    runTests().catch(error => {
        console.error('❌ Fatal error:', error.message);
        process.exit(1);
    });
}

module.exports = {
    loadDataset,
    loadJudgePrompt,
    askAI,
    evaluateResponse,
    runTest,
    displayResults,
    runTests
};
