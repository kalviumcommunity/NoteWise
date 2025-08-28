# One-Shot Prompting

## Overview

One-shot prompting is a technique where an AI model is provided with a single example (input-output pair) before being asked to perform a similar task. This single demonstration helps the model understand the expected format, style, and approach for the requested task.

## Key Characteristics

- **Single Example**: Only one input-output pair is provided as demonstration
- **Learning from Example**: The model learns the pattern from the single demonstration
- **Format Guidance**: Shows the expected structure and style of the response
- **Task Understanding**: Helps the model understand the specific requirements

## When to Use One-Shot Prompting

- When you need consistent formatting or style
- For tasks that require specific output patterns
- When zero-shot results are inconsistent
- To establish a particular tone or approach
- For complex tasks that benefit from demonstration

## Example

### User Prompt
```
Input: What is 2+2? 
Output: 4
Now answer: What is 3+5?
```

### Expected AI Response
```
8
```

## Detailed Example with Context

### Complete Prompt
```
Here's an example of a math problem:

Input: What is 2+2? 
Output: 4

Now answer this similar question: What is 3+5?
```

### Expected AI Response
```
8
```

## Advantages

1. **Consistency**: Provides a clear example of expected output format
2. **Learning**: Model learns from the demonstration pattern
3. **Efficiency**: Only requires one example (minimal token usage)
4. **Clarity**: Reduces ambiguity about task requirements
5. **Style Control**: Establishes tone, format, and approach

## Limitations

1. **Limited Learning**: Only one example may not cover all variations
2. **Overfitting**: Model might copy the example too closely
3. **Context Dependency**: Effectiveness depends on example quality
4. **Task Specificity**: May not work well for very different tasks

## Best Practices

- Choose a representative example that matches your target task
- Ensure the example demonstrates the desired output format
- Keep the example simple and clear
- Make sure the example is relevant to the task at hand
- Test with different examples to ensure robustness

## Use Cases

- **Mathematical Operations**: Simple calculations with consistent format
- **Text Classification**: Categorizing content with specific labels
- **Format Conversion**: Converting text to specific formats
- **Style Transfer**: Applying a particular writing style
- **Code Generation**: Creating code with specific patterns

## Comparison with Other Techniques

| Technique | Examples | Use Case |
|-----------|----------|----------|
| Zero-shot | 0 | Simple, direct tasks |
| One-shot | 1 | Format consistency |
| Multi-shot | 2+ | Complex patterns |

## Example Variations

### Mathematical Operations
```
Input: What is 5+3?
Output: 8
Now answer: What is 7+9?
```

### Text Classification
```
Input: "I love this movie!"
Output: Positive
Now classify: "This is terrible."
```

### Code Generation
```
Input: Create a function to add two numbers
Output: 
def add_numbers(a, b):
    return a + b

Now create: A function to multiply two numbers
```

---

*One-shot prompting provides the perfect balance between simplicity and effectiveness, offering guidance without overwhelming the model with examples.*
