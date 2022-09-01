import sum from "./sum";

it("should return a + b", () => {
  const result = sum;

  expect(result(1, 2)).toBe(3);
});
