const { mwst, brutto} = require("./mehrwertsteuer.js");
/* test("add 7,2, result must be 9", () => {
  expect(add(7, 2).toBe(4));
});
test("add 7,2, result must NOT be 10", () => {
  expect(add(7, 2)).not.toBe(10);
});
test("substract 7,2, result must  be 5", () => {
  expect(substract(7, 2)).toBe(5);
});
test("divide 10,2, result must be 5", () => {
  expect(divide(10, 2)).toBe(5);
});
test("multiply 7,2, result must be 14", () => {
  expect(multiply(7, 2)).toBe(14);
});
test("division by zero  throws an error", () => {
  expect(() => divide(7,0).toThrow("division by zero not alllowed!!!") 
});
 */
test("7% von 100 = 7", () => {
  expect(mwst(100,  0.07).toBe(7); 
});
