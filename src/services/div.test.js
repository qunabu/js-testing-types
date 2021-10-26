import { div, mod } from "./div";

describe("Div tests", () => {
  test("calculates 2 / 1 properlly", () => {
    expect(div(2, 1)).toBe(2);
  });
  test("calculates 2 / 2 properlly", () => {
    expect(div(2, 2)).toBe(1);
  });
});

describe("Div edge cases tests", () => {
  test("calculates 2 / 0 properlly", () => {
    expect(div(2, 0)).toBe(Infinity);
  });
  test("calculates 2 / 'a' properlly", () => {
    expect(div(2, "a")).toBe(NaN);
  });

  test("calculates 2 / null properlly", () => {
    expect(div(2)).toBe(NaN);
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
