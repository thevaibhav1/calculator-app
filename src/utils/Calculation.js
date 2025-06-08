export const evaluateExpression = (s) => {
  if (s === "") return "Error";
  const numbers = s.split(/[\+\-\*\/]/).map(Number);
  const ops = s.split(/[\d]+/).filter((op) => op !== "");
  let result = numbers[0];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const num = numbers[i + 1];
    switch (op) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "*":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
      default:
        throw new Error(`Unknown operator: ${op}`);
    }
  }
  return result;
};
