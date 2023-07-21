# Simple Reverse Polish Notation (RPN) Calculator

This repository contains a simple calculator that works based on Reverse Polish Notation (RPN). The code is presented as a Node.js module named calculator.js, allowing users to perform arithmetic calculations using addition, subtraction, multiplication, and division operations.
## How to Use
Make sure you have Node.js installed on your computer.
Clone this repository or download it as a ZIP archive and extract it.
Open your command line (terminal) and navigate to the project folder.
Run app.js to start using the calculator.
Enter a mathematical expression in RPN format and press Enter to get the result.
To exit the calculator, type exit.
## Examples
Enter 0 and press Enter - the result will be 0.
Enter + 3 4 and press Enter - the result will be 7 (3 + 4).
Enter - 3 * 4 5 and press Enter - the result will be -17 (3 - (4 * 5)).
Enter * + 3 4 5 and press Enter - the result will be 35 ((3 + 4) * 5).
## Running Tests
The project includes tests to verify the calculator's functionality for various scenarios. To run the tests, follow these steps:
Ensure you are in the root folder of the project.
Run the command npm install to install the dependencies for testing.
Then, run the command npm test to execute the tests and ensure the calculator works correctly.
