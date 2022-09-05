import sum from "./sum";

it("should add two numbes", () => {
  const result = sum;

  expect(result(1, 2)).toBe(3);
});
