import {
  combinedProbability,
  eitherProbability,
} from "./probabilityCalculations";

describe("combinedProbability()", () => {
  describe("Correctly combines 2 probabilities", () => {
    test.each`
      x      | y      | expected
      ${0}   | ${0}   | ${0}
      ${1}   | ${0}   | ${0}
      ${0}   | ${1}   | ${0}
      ${1}   | ${1}   | ${1}
      ${0.5} | ${0.5} | ${0.25}
    `("inputX = $x, inputY = $y", ({ x, y, expected }) => {
      expect(combinedProbability(x, y)).toEqual(expected);
    });
  });
});

describe("eitherProbability()", () => {
  describe("Correctly combines 2 probabilities", () => {
    test.each`
      x      | y      | expected
      ${0}   | ${0}   | ${0}
      ${1}   | ${0}   | ${1}
      ${0}   | ${1}   | ${1}
      ${1}   | ${1}   | ${1}
      ${0.5} | ${0.5} | ${0.75}
    `("inputX = $x, inputY = $y", ({ x, y, expected }) => {
      expect(eitherProbability(x, y)).toEqual(expected);
    });
  });
});
