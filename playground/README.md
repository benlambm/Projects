# JavaScript Playground

A modern, interactive learning environment for JavaScript fundamentals using vanilla ES6+ JavaScript.

## Project Overview

JavaScript Playground is an educational tool designed to help beginners learn JavaScript through interactive examples. Each page focuses on a specific core concept with hands-on demonstrations that learners can experiment with directly in the browser.

## Concepts Covered

The playground covers the following JavaScript fundamentals:

- **Intro**: Basic introduction to JavaScript
- **Variables**: Understanding `let`, `const`, and variable scope
- **Functions**: Creating and using functions, arrow functions
- **Conditionals**: If/else statements and logical operations
- **Loops**: For loops and iteration techniques
- **Arrays**: Working with arrays and array methods
- **Objects**: Object creation and manipulation
- **DOM**: Document Object Model interaction
- **Events**: Event handling and listeners
- **Async**: Asynchronous JavaScript with Promises

## Technical Details

This project is built with:
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

No frameworks, libraries, or build tools are required. Everything runs directly in the browser.

## How to Use

1. Open the project in a web browser
2. Navigate between concepts using the navigation bar
3. Read the explanations and interact with the examples
4. Open your browser's console (Right-click → Inspect → Console) to see additional information and try the code yourself

## Guidelines for Contributors

### General Guidelines

- **Vanilla JavaScript Only**: Do not add any external libraries, frameworks, or dependencies
- **Modern JavaScript**: Use ES6+ features (arrow functions, template literals, destructuring, etc.)
- **Educational Focus**: All code should be well-commented and designed for learning
- **Browser Compatibility**: Ensure examples work in modern browsers (Chrome, Firefox, Safari, Edge)

### Code Style Guidelines

- Use `const` for values that won't be reassigned, `let` for values that will
- Prefer arrow functions for callbacks and short functions
- Use template literals for string interpolation
- Add error handling for DOM operations
- Expose educational functions to the window object for console experimentation
- Include console.log messages to guide learners
- Use descriptive variable names
- Add JSDoc comments for functions

### Structure Guidelines

- Each concept should have its own HTML and JS file pair
- Keep the UI simple and focused on the learning objective
- Maintain consistent naming conventions across files
- Follow the established pattern of interactive examples with output displays

## For LLM Contributors

When contributing to this project as an LLM:

1. Maintain the educational nature of the code
2. Ensure all examples are interactive
3. Add thorough comments explaining the code
4. Expose variables and functions to the window object for console experimentation
5. Include error handling for robustness
6. Keep the code simple enough for beginners to understand
7. Use only vanilla JavaScript (ES6+) without external dependencies
8. Follow the existing project structure and patterns
9. Ensure each example has console output to guide the learning process