export const evaluateExpression = (expr) => {
  if (!expr) return "Error";

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const isOperator = (ch) => "+-*/".includes(ch);
  const isDigit = (ch) => /\d|\./.test(ch);

  // 💡 Basic syntax check
  const isValidExpression = (expr) => {
    const trimmed = expr.replace(/\s+/g, "");
    const validPattern =
      /^-?(\(*-?\d+(\.\d+)?\)*([\+\-\*\/]\(*-?\d+(\.\d+)?\)*)*)$/;
    return validPattern.test(trimmed);
  };

  if (!isValidExpression(expr)) throw new Error("Invalid Expression");

  // 1. Convert infix to postfix
  const toPostfix = (expr) => {
    const output = [];
    const operators = [];
    let number = "";
    let i = 0;

    while (i < expr.length) {
      const ch = expr[i];

      if (ch === " ") {
        i++;
        continue;
      }

      if (
        ch === "-" &&
        (i === 0 || expr[i - 1] === "(" || isOperator(expr[i - 1]))
      ) {
        number += ch;
        i++;
        continue;
      }

      if (isDigit(ch)) {
        number += ch;
        i++;
        continue;
      }

      if (number) {
        output.push(number);
        number = "";
      }

      if (ch === "(") {
        operators.push(ch);
      } else if (ch === ")") {
        while (operators.length && operators[operators.length - 1] !== "(") {
          output.push(operators.pop());
        }
        operators.pop(); // remove '('
      } else if (isOperator(ch)) {
        while (
          operators.length &&
          precedence[ch] <= precedence[operators[operators.length - 1]]
        ) {
          output.push(operators.pop());
        }
        operators.push(ch);
      }

      i++;
    }

    if (number) output.push(number);
    while (operators.length) output.push(operators.pop());

    return output;
  };

  // 2. Evaluate postfix
  const evaluatePostfix = (postfix) => {
    const stack = [];

    for (const token of postfix) {
      if (isOperator(token)) {
        const b = parseFloat(stack.pop());
        const a = parseFloat(stack.pop());

        if (isNaN(a) || isNaN(b)) throw new Error("Invalid Expression");

        let result;
        switch (token) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            if (b === 0 && a === 0) result = NaN;
            else if (b === 0) result = Infinity;
            else result = a / b;
            break;
        }
        stack.push(result);
      } else {
        if (isNaN(token)) throw new Error("Invalid Number");
        stack.push(token);
      }
    }

    if (stack.length !== 1) throw new Error("Invalid Expression");

    return stack.pop();
  };

  const postfix = toPostfix(expr);
  return evaluatePostfix(postfix);
};
