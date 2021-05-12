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
  CalculationTypes,
} from "./calculator/probabilityCalculations";
import { Control, Controller, FieldError, useForm } from "react-hook-form";
import { logTrace } from "./api/traceLogging/logTrace";

interface ICalculatorFormInput {
  probabilityA: string;
  probabilityB: string;
  functionType: CalculationTypes;
}

const ProbabilityCalculatorApp = () => {
  const [calculationResult, setCalculationResult] =
    useState<number | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICalculatorFormInput>();

  const onSubmit = ({
    probabilityA,
    probabilityB,
    functionType,
  }: ICalculatorFormInput) => {
    const a = parseFloat(probabilityA);
    const b = parseFloat(probabilityB);
    const result = calculations[functionType](a, b);
    setCalculationResult(result);
    logTrace({ calculationType: functionType, inputs: [a, b], result });
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
          error={errors.probabilityA}
        />
        <ProbabilityInput
          control={control}
          label="Probability B"
          field="probabilityB"
          error={errors.probabilityB}
        />
        <Controller
          name="functionType"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="functionType"
              label="Function"
              select
              error={Boolean(errors.functionType)}
              helperText={
                errors.functionType &&
                errors.functionType.type === "required" &&
                "Please enter a value for Function"
              }
            >
              <MenuItem value="combined">CombinedWith</MenuItem>
              <MenuItem value="either">Either</MenuItem>
            </TextField>
          )}
        />

        <Button type="submit" variant="outlined" color="primary">
          Calculate
        </Button>
      </form>

      <Typography>Result: {calculationResult}</Typography>
    </Container>
  );
};

interface ProbabilityInputProps {
  control: Control<ICalculatorFormInput>;
  label: string;
  field: keyof ICalculatorFormInput;
  error?: FieldError;
}

const ProbabilityInput = ({
  control,
  label,
  field,
  error,
}: ProbabilityInputProps) => {
  const errorText: Partial<{ [key: string]: string }> = {
    required: `Please enter a value for ${label}`,
    max: `${label} is too large, enter a number from 0.0 to 1.0`,
    min: `${label} is too small, enter a number from 0.0 to 1.0`,
  };

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
          error={Boolean(error)}
          helperText={error && errorText[error.type]}
        />
      )}
    />
  );
};

export default ProbabilityCalculatorApp;
