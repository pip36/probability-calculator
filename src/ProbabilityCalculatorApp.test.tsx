import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProbabilityCalculatorApp from "./ProbabilityCalculatorApp";

test("Displays main heading", async () => {
  render(<ProbabilityCalculatorApp />);

  const heading = await screen.findByRole("heading", {
    name: /Probability Calculator/i,
  });

  expect(heading).toBeInTheDocument();
});
