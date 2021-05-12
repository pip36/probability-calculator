import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ProbabilityCalculatorApp from "./ProbabilityCalculatorApp";
import theme from "./theme";

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <ProbabilityCalculatorApp />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
