import {
  Typography,
  Container,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import { combinedProbability } from "./calculator/probabilityCalculations";
import { Controller, useForm } from "react-hook-form";

interface ICalculatorFormInput {
  probabilityA: string;
  probabilityB: string;
  functionType: string;
}

const ProbabilityCalculatorApp = () => {
  const [calculationResult, setCalculationResult] =
    useState<number | null>(null);

  const {
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<ICalculatorFormInput>();

  const onSubmit = ({
    probabilityA,
    probabilityB,
    functionType,
  }: ICalculatorFormInput) => {
    setCalculationResult(
      combinedProbability(parseFloat(probabilityA), parseFloat(probabilityB))
    );
  };

  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h1">
        Probability Calculator
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="probabilityA"
          control={control}
          rules={{ min: 0, max: 1, required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Probability A"
              id="probabilityA"
              type="number"
            />
          )}
        />
        <Controller
          name="probabilityB"
          control={control}
          rules={{ min: 0, max: 1, required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Probability B"
              id="probabilityB"
              type="number"
            />
          )}
        />
        <Controller
          name="functionType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} id="functionType" label="Function" select>
              <MenuItem value="combinedWith">CombinedWith</MenuItem>
            </TextField>
          )}
        />

        <Button type="submit">Calculate</Button>
      </form>

      <Typography>Result: {calculationResult}</Typography>
    </Container>
  );
};

export default ProbabilityCalculatorApp;
