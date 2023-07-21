exports.calculate = function(expression) {
  const tokens = expression.split(" ");
  const stack = [];
  tokens.reverse();

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(operand1 / operand2);
          break;
        default:
          throw new Error("Invalid operator: " + token);
      }
    }
  }

  return stack.pop();
};
