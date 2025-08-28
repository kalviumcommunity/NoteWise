# NoteWise User Prompt Template Guide

## Overview

This document provides structured templates and examples for creating effective prompts that can be tested and optimized using NoteWise. These templates serve as a foundation for consistent, high-quality prompt engineering across various use cases.

## Template Structure

### Basic Prompt Template

```
[CONTEXT] Provide background information and context
[OBJECTIVE] Clearly state what you want to achieve
[CONSTRAINTS] Specify limitations, requirements, or boundaries
[FORMAT] Define the expected output format
[EXAMPLES] Include relevant examples (if applicable)
[INSTRUCTIONS] Provide step-by-step guidance
```

### Advanced Prompt Template

```
[ROLE] Define the AI's role or persona
[CONTEXT] Provide comprehensive background information
[OBJECTIVE] State the primary goal clearly
[CONSTRAINTS] List all limitations and requirements
[FORMAT] Specify exact output format and structure
[EXAMPLES] Include input-output examples
[INSTRUCTIONS] Provide detailed step-by-step instructions
[QUALITY_CRITERIA] Define what constitutes a good response
[VALIDATION] Specify how to verify the output
```

## Template Categories

### 1. Content Creation Prompts

#### Blog Post Writer
```
Role: You are an expert content writer specializing in [topic/industry]
Context: Create a blog post about [specific topic] for [target audience]
Objective: Write a comprehensive, engaging blog post of [word count] words
Constraints: 
- Use [tone/style]
- Include [specific elements]
- Avoid [restrictions]
Format: 
- Introduction (hook + overview)
- Main content (3-5 sections with subheadings)
- Conclusion (summary + call-to-action)
Examples: [Provide 1-2 example paragraphs]
Instructions:
1. Research the topic thoroughly
2. Create an attention-grabbing headline
3. Structure content with clear sections
4. Include relevant statistics or examples
5. Optimize for readability and engagement
Quality Criteria: Informative, engaging, well-structured, SEO-friendly
Validation: Check for grammar, flow, and completeness
```

#### Social Media Content
```
Role: You are a social media marketing expert
Context: Create content for [platform] about [topic/product/service]
Objective: Generate [number] engaging social media posts
Constraints:
- Platform-specific requirements
- Character limits
- Brand voice guidelines
Format: [Platform-specific format]
Examples: [Successful post examples]
Instructions: [Step-by-step creation process]
```

### 2. Technical Prompts

#### Code Generation
```
Role: You are a senior software developer specializing in [language/framework]
Context: Create code for [specific functionality] in [project context]
Objective: Generate clean, efficient, and well-documented code
Constraints:
- Language: [specific language]
- Framework: [if applicable]
- Performance requirements
- Security considerations
Format: 
- Code with comments
- Brief explanation
- Usage examples
Examples: [Similar code snippets]
Instructions:
1. Analyze requirements
2. Design solution architecture
3. Implement with best practices
4. Add comprehensive comments
5. Include error handling
Quality Criteria: Readable, efficient, secure, maintainable
Validation: Test for functionality and edge cases
```

#### Code Review
```
Role: You are a senior code reviewer with expertise in [technologies]
Context: Review the following code for [specific aspects]
Objective: Provide comprehensive feedback and suggestions
Constraints: Focus on [specific areas of concern]
Format:
- Summary of findings
- Detailed feedback by section
- Suggested improvements
- Priority levels
Examples: [Code review examples]
Instructions: [Review process steps]
```

### 3. Analysis Prompts

#### Data Analysis
```
Role: You are a data analyst with expertise in [domain]
Context: Analyze [dataset/trends] related to [business question]
Objective: Provide actionable insights and recommendations
Constraints:
- Data limitations
- Time constraints
- Stakeholder requirements
Format:
- Executive summary
- Key findings
- Detailed analysis
- Recommendations
- Next steps
Examples: [Analysis examples]
Instructions: [Analysis methodology]
```

#### Market Research
```
Role: You are a market research analyst
Context: Research [market/industry] for [specific purpose]
Objective: Provide comprehensive market insights
Constraints: [Research limitations]
Format: [Structured report format]
Examples: [Market analysis examples]
Instructions: [Research methodology]
```

### 4. Creative Prompts

#### Story Generation
```
Role: You are a creative writer specializing in [genre]
Context: Create a story about [theme/topic] for [audience]
Objective: Write an engaging [story type] of [length]
Constraints:
- Genre requirements
- Content guidelines
- Target audience
Format: [Story structure]
Examples: [Story examples]
Instructions: [Writing process]
```

#### Design Brief
```
Role: You are a creative director
Context: Create a design brief for [project type]
Objective: Provide clear design direction and requirements
Constraints: [Project limitations]
Format: [Brief structure]
Examples: [Design brief examples]
Instructions: [Brief creation process]
```

## Testing Framework

### Prompt Testing Template

```
Test Case: [Test identifier]
Prompt Version: [Version number]
Test Date: [Date]
Tester: [Name]

Input Parameters:
- Context: [Test context]
- Variables: [Variable values]
- Constraints: [Test constraints]

Expected Output:
- Format: [Expected format]
- Content: [Expected content]
- Quality: [Quality criteria]

Actual Output:
- Format: [Actual format]
- Content: [Actual content]
- Quality: [Quality assessment]

Analysis:
- Strengths: [What worked well]
- Weaknesses: [Areas for improvement]
- Recommendations: [Suggested changes]

Score: [1-10 rating]
```

### A/B Testing Template

```
Test ID: [Unique identifier]
Prompt A: [First prompt version]
Prompt B: [Second prompt version]
Test Parameters: [Testing conditions]

Metrics:
- Response Quality: [A vs B comparison]
- Consistency: [A vs B comparison]
- Efficiency: [A vs B comparison]
- User Satisfaction: [A vs B comparison]

Results:
- Winner: [A or B]
- Confidence Level: [Statistical confidence]
- Key Differences: [Notable variations]

Recommendations: [Next steps]
```

## Best Practices

### Prompt Engineering Principles

1. **Clarity**: Use clear, unambiguous language
2. **Specificity**: Include relevant details and constraints
3. **Context**: Provide sufficient background information
4. **Examples**: Include relevant examples when helpful
5. **Iteration**: Test and refine prompts continuously
6. **Documentation**: Keep records of successful prompts

### Common Pitfalls to Avoid

1. **Vagueness**: Unclear objectives or requirements
2. **Over-complexity**: Too many instructions or constraints
3. **Lack of Context**: Insufficient background information
4. **Inconsistent Formatting**: Unstructured or unclear format requirements
5. **Missing Validation**: No way to verify output quality

### Optimization Strategies

1. **Start Simple**: Begin with basic templates and add complexity as needed
2. **Test Incrementally**: Make small changes and test each iteration
3. **Gather Feedback**: Collect user feedback and incorporate improvements
4. **Document Success**: Record what works for future reference
5. **Stay Updated**: Keep current with prompt engineering best practices

## Example Prompts

### Example 1: Customer Service Response
```
Role: You are a customer service representative for [Company Name]
Context: A customer is experiencing [specific issue] with [product/service]
Objective: Provide a helpful, empathetic response that resolves their concern
Constraints:
- Be professional and courteous
- Acknowledge their frustration
- Provide clear next steps
- Stay within company policies
Format: 
- Acknowledgment
- Empathy statement
- Solution/next steps
- Closing
Examples: [Response examples]
Instructions: [Response guidelines]
```

### Example 2: Product Description
```
Role: You are a marketing copywriter specializing in [product category]
Context: Create a product description for [product name] targeting [audience]
Objective: Write compelling copy that drives conversions
Constraints:
- Highlight key benefits
- Include relevant specifications
- Use persuasive language
- Stay within [word count]
Format: [Description structure]
Examples: [Successful descriptions]
Instructions: [Writing process]
```

## Quality Assurance Checklist

### Before Testing
- [ ] Prompt is clear and unambiguous
- [ ] All constraints are specified
- [ ] Expected format is defined
- [ ] Examples are relevant and helpful
- [ ] Instructions are complete and logical

### During Testing
- [ ] Test with various inputs
- [ ] Evaluate consistency across responses
- [ ] Check for edge cases
- [ ] Assess output quality
- [ ] Gather user feedback

### After Testing
- [ ] Document results and insights
- [ ] Identify areas for improvement
- [ ] Update prompt based on findings
- [ ] Retest with improvements
- [ ] Share learnings with team

---

*Use these templates as a starting point and customize them based on your specific needs and use cases. Remember that effective prompt engineering is an iterative process that requires continuous testing and refinement.*
