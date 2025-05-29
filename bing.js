const isValid = (str) => {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
};

// Test cases
const testCases = [
  { input: "{([])}", expected: true },
  { input: "{([)]}", expected: false },
  { input: "()", expected: true },
  { input: "(", expected: false },
  { input: "", expected: true },
  { input: "[]{}", expected: true },
  { input: "[{(})]", expected: false },
  { input: "(((((((((())))))))))", expected: true },
  { input: "((((((", expected: false },
  { input: "(()()()){}", expected: true },
];

testCases.forEach(({ input, expected }, index) => {
  const result = isValid(input);
  console.log(
    `Test case ${
      index + 1
    }: input = "${input}" | expected = ${expected} | got = ${result}`
  );
});
