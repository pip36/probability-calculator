import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { combinedProbability } from "./calculator/probabilityCalculations";

import ProbabilityCalculatorApp from "./ProbabilityCalculatorApp";

test("Displays main heading", () => {
  render(<ProbabilityCalculatorApp />);

  const heading = screen.getByRole("heading", {
    name: /Probability Calculator/i,
  });

  expect(heading).toBeInTheDocument();
});

test("Can calculate a combined probability and display the result", async () => {
  render(<ProbabilityCalculatorApp />);
  const probabilityA = screen.getByLabelText(/Probability A/i);
  const probabilityB = screen.getByLabelText(/Probability B/i);
  const functionSelect = screen.getByLabelText(/Function/i);
  const calculateButton = screen.getByRole("button", { name: /Calculate/i });

  const inputA = Math.random();
  const inputB = Math.random();

  userEvent.type(probabilityA, inputA.toString());
  userEvent.type(probabilityB, inputB.toString());
  userEvent.click(functionSelect);
  userEvent.click(screen.getByText(/CombinedWith/i));
  userEvent.click(calculateButton);

  expect(
    await screen.findByText(`Result: ${combinedProbability(inputA, inputB)}`)
  ).toBeInTheDocument();
});
