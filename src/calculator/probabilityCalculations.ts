export const combinedProbability = (x: number, y: number): number => x * y;

export const eitherProbability = (x: number, y: number): number =>
  x + y - x * y;

export type FunctionTypes = "either" | "combined";

export const calculations: {
  [Type in FunctionTypes]: (x: number, y: number) => number;
} = {
  combined: combinedProbability,
  either: eitherProbability,
};
