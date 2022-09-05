import subtract from "./subtract";

it.only("should subtracting two number", () => {
  expect(subtract(2, 1)).toBe(1);
});
