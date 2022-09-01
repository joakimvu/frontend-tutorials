import { myFunction } from "./index";

it("should return 5 when called", () => {
  const result = myFunction();

  expect(result).toBe(5);
});
