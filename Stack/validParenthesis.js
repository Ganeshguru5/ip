function isValidParnthesis(str) {
  let stack = [];
  for (ch of str) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (
        (stack[stack.length - 1] === "(" && ch === ")") ||
        (stack[stack.length - 1] === "{" && ch === "}") || (
          stack[stack.length - 1] === "[" && ch === "]"
        )) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const resut = isValidParnthesis("{}[]");
console.log(resut);
