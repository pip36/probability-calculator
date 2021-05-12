export const combinedProbability = (x: number, y: number): number => x * y;

export const eitherProbability = (x: number, y: number): number =>
  x + y - x * y;
