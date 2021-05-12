import {
  Typography,
  Container,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import {
  calculations,
  combinedProbability,
  FunctionTypes,
} from "./calculator/probabilityCalculations";
import { Control, Controller, useForm } from "react-hook-form";

interface ICalculatorFormInput {
  probabilityA: string;
  probabilityB: string;
  functionType: FunctionTypes;
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
    const result = calculations[functionType](
      parseFloat(probabilityA),
      parseFloat(probabilityB)
    );
    setCalculationResult(result);
  };

  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h1">
        Probability Calculator
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProbabilityInput
          control={control}
          label="Probability A"
          field="probabilityA"
        />
        <ProbabilityInput
          control={control}
          label="Probability B"
          field="probabilityB"
        />
        <Controller
          name="functionType"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} id="functionType" label="Function" select>
              <MenuItem value="combined">CombinedWith</MenuItem>
              <MenuItem value="either">Either</MenuItem>
            </TextField>
          )}
        />

        <Button type="submit">Calculate</Button>
      </form>

      <Typography>Result: {calculationResult}</Typography>
    </Container>
  );
};

interface ProbabilityInputProps {
  control: Control<ICalculatorFormInput>;
  label: string;
  field: keyof ICalculatorFormInput;
}

const ProbabilityInput = ({ control, label, field }: ProbabilityInputProps) => {
  return (
    <Controller
      name={field}
      control={control}
      rules={{ min: 0, max: 1, required: true }}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          id={label}
          type="number"
          inputProps={{ step: "any" }}
        />
      )}
    />
  );
};

export default ProbabilityCalculatorApp;
