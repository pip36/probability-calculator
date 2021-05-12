import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  combinedProbability,
  eitherProbability,
  FunctionTypes,
} from "./calculator/probabilityCalculations";

import ProbabilityCalculatorApp from "./ProbabilityCalculatorApp";

test("Displays main heading", () => {
  render(<ProbabilityCalculatorApp />);

  const heading = screen.getByRole("heading", {
    name: /Probability Calculator/i,
  });

  expect(heading).toBeInTheDocument();
});

const performCalculation = (x: number, y: number, type: FunctionTypes) => {
  const functionText: { [Type in FunctionTypes]: RegExp } = {
    combined: /CombinedWith/i,
    either: /Either/i,
  };

  const probabilityA = screen.getByLabelText(/Probability A/i);
  const probabilityB = screen.getByLabelText(/Probability B/i);
  const functionSelect = screen.getByLabelText(/Function/i);
  const calculateButton = screen.getByRole("button", { name: /Calculate/i });

  userEvent.type(probabilityA, x.toString());
  userEvent.type(probabilityB, y.toString());
  userEvent.click(functionSelect);
  userEvent.click(screen.getByText(functionText[type]));
  userEvent.click(calculateButton);
};

test("Can calculate a combined probability and display the result", async () => {
  render(<ProbabilityCalculatorApp />);

  const inputA = Math.random();
  const inputB = Math.random();

  performCalculation(inputA, inputB, "combined");

  expect(
    await screen.findByText(`Result: ${combinedProbability(inputA, inputB)}`)
  ).toBeInTheDocument();
});

test("Can calculate an 'either' probability and display the result", async () => {
  render(<ProbabilityCalculatorApp />);

  const inputA = Math.random();
  const inputB = Math.random();

  performCalculation(inputA, inputB, "either");

  expect(
    await screen.findByText(`Result: ${eitherProbability(inputA, inputB)}`)
  ).toBeInTheDocument();
});

test("Displays validation errors when required fields are missing", async () => {
  render(<ProbabilityCalculatorApp />);

  const calculateButton = screen.getByRole("button", { name: /Calculate/i });
  userEvent.click(calculateButton);

  expect(
    await screen.findByText("Please enter a value for Probability A")
  ).toBeInTheDocument();

  expect(
    await screen.findByText("Please enter a value for Probability B")
  ).toBeInTheDocument();

  expect(
    await screen.findByText("Please enter a value for Function")
  ).toBeInTheDocument();
});
