import { div, mod } from "./div";

describe("Div tests", () => {
  test("calculates 2 / 1 properlly", () => {
    expect(div(2, 1)).toBe(2);
  });
  test("calculates 2 / 2 properlly", () => {
    expect(div(2, 2)).toBe(1);
  });
});

describe("Mod tests", () => {
  test("calculates 2 / 1 properlly", () => {
    expect(mod(2, 1)).toBe(0);
  });
  test("calculates 2 / 2 properlly", () => {
    expect(mod(2, 2)).toBe(0);
  });
  test("calculates 3 / 2 properlly", () => {
    expect(mod(3, 2)).toBe(1);
  });
});
