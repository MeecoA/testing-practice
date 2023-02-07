import { capitalize, reverseStr, caesarCipher, analyzeArray } from "./practiceTest";

test("first letter capitalize", () => {
  expect(capitalize("hello")).toMatch(/Hello/);
});

test("reversed a string", () => {
  expect(reverseStr("hello")).toMatch(/olleh/);
});

test("ceasar cypher", () => {
  expect(caesarCipher("meeco", 3)).toMatch(/phhfr/);
});

test("anaylze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
