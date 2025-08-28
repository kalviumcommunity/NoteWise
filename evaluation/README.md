# NoteWise Evaluation Framework

## Overview

The NoteWise Evaluation Framework provides a comprehensive testing system for evaluating AI model responses against predefined datasets. This framework enables automated assessment of AI model performance through structured testing and evaluation.

## Components

### 📊 `dataset.json`
Contains test cases with questions and expected answers in JSON format:
```json
[
  { "question": "What is the capital of France?", "expected": "Paris" },
  { "question": "What is 2+2?", "expected": "4" },
  { "question": "Who wrote Hamlet?", "expected": "William Shakespeare" },
  { "question": "What is the boiling point of water?", "expected": "100°C" },
  { "question": "When did World War II end?", "expected": "1945" }
]
```

### ⚖️ `judge-prompt.md`
A comprehensive prompt that instructs an AI judge to evaluate responses by comparing them with expected answers. The judge returns results in JSON format:
```json
{
  "question": "The original question",
  "answer": "The AI model's response",
  "expected": "The expected correct answer",
  "result": "correct" or "incorrect"
}
```

### 🚀 `test-runner.js`
A Node.js script that:
- Loads the evaluation dataset
- Sends questions to the AI API
- Evaluates responses using the judge prompt
- Logs detailed results and generates summary statistics
- Saves results to `test-results.json`

## Prerequisites

- Node.js 18+ (for native fetch support)
- AI API access (OpenAI, Anthropic, etc.)
- API key for the chosen AI service

## Setup

1. **Install dependencies** (if any additional packages are needed):
   ```bash
   npm install
   ```

2. **Configure API credentials**:
   ```bash
   export AI_API_KEY="your-api-key-here"
   export AI_API_ENDPOINT="https://api.openai.com/v1/chat/completions"
   export AI_MODEL="gpt-3.5-turbo"
   ```

3. **Make the test runner executable**:
   ```bash
   chmod +x evaluation/test-runner.js
   ```

## Usage

### Running Tests

```bash
# Run from the project root
node evaluation/test-runner.js

# Or run directly
./evaluation/test-runner.js
```

### Example Output

```
🚀 Starting NoteWise AI Evaluation Tests
============================================================
📂 Loading evaluation dataset...
📊 Loaded 5 test cases
⚠️  Warning: Using default API key. Set AI_API_KEY environment variable for production use.

🧪 Running Test 1/5
Question: What is the capital of France?
Expected: Paris
🤖 Asking AI...
AI Answer: Paris
⚖️  Evaluating response...
Result: CORRECT

🧪 Running Test 2/5
Question: What is 2+2?
Expected: 4
🤖 Asking AI...
AI Answer: 4
⚖️  Evaluating response...
Result: CORRECT

...

============================================================
📊 TEST RESULTS SUMMARY
============================================================
Total Tests: 5
✅ Correct: 4
❌ Incorrect: 1
⚠️  Errors: 0
📈 Accuracy: 80.0%

📋 Detailed Results:
------------------------------------------------------------
✅ Test 1: What is the capital of France?
   AI Answer: Paris
   Expected: Paris
   Result: CORRECT

❌ Test 2: What is 2+2?
   AI Answer: The answer is 4
   Expected: 4
   Result: INCORRECT

...

💾 Results saved to: /path/to/evaluation/test-results.json
✅ Tests completed successfully
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `AI_API_KEY` | Your AI API key | `your-api-key-here` |
| `AI_API_ENDPOINT` | API endpoint URL | `https://api.openai.com/v1/chat/completions` |
| `AI_MODEL` | Model to use for testing | `gpt-3.5-turbo` |

### Customizing the Dataset

To add more test cases, edit `dataset.json`:

```json
[
  { "question": "Your question here?", "expected": "Expected answer" },
  { "question": "Another question?", "expected": "Another expected answer" }
]
```

### Customizing the Judge Prompt

Modify `judge-prompt.md` to adjust evaluation criteria, add special cases, or change the output format.

## Features

### 🎯 Automated Testing
- Runs all test cases sequentially
- Handles API rate limiting with delays
- Provides detailed progress logging

### 📊 Comprehensive Results
- Individual test results with AI responses
- Summary statistics (accuracy, correct/incorrect counts)
- Results saved to JSON file for further analysis

### 🛡️ Error Handling
- Graceful handling of API failures
- Fallback evaluation for malformed judge responses
- Clear error messages and status codes

### 🔧 Extensible Design
- Modular code structure
- Easy to add new test cases
- Configurable evaluation criteria

## Output Files

### `test-results.json`
Contains detailed results of all test runs:
```json
[
  {
    "question": "What is the capital of France?",
    "answer": "Paris",
    "expected": "Paris",
    "result": "correct"
  },
  {
    "question": "What is 2+2?",
    "answer": "4",
    "expected": "4",
    "result": "correct"
  }
]
```

## Exit Codes

- `0`: Tests completed successfully
- `1`: All tests failed (all incorrect)
- `2`: Tests completed with errors

## Best Practices

1. **Use diverse test cases**: Include different types of questions and difficulty levels
2. **Validate expected answers**: Ensure expected answers are accurate and unambiguous
3. **Monitor API usage**: Be aware of rate limits and costs
4. **Review judge responses**: Check that the judge prompt is evaluating correctly
5. **Iterate and improve**: Use results to refine both test cases and evaluation criteria

## Troubleshooting

### Common Issues

1. **API Key Error**: Ensure `AI_API_KEY` is set correctly
2. **Network Issues**: Check internet connection and API endpoint accessibility
3. **Rate Limiting**: Increase delays between requests if needed
4. **JSON Parsing Errors**: Check judge prompt output format

### Debug Mode

For detailed debugging, you can modify the script to add more verbose logging or run individual functions separately.

## Contributing

To contribute to the evaluation framework:

1. Add new test cases to `dataset.json`
2. Improve the judge prompt in `judge-prompt.md`
3. Enhance the test runner with new features
4. Add support for different AI providers
5. Implement additional evaluation metrics

---

*The NoteWise Evaluation Framework provides a robust foundation for testing and improving AI model performance through systematic evaluation and analysis.*
