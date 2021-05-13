import {
  Typography,
  Container,
  TextField,
  Button,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { useState } from "react";
import {
  calculations,
  CalculationTypes,
} from "./calculator/probabilityCalculations";
import { Control, Controller, FieldError, useForm } from "react-hook-form";
import { logTrace } from "./services/traceLogging/logTrace";

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
      <Typography align="center" variant="h3" gutterBottom component="h1">
        Probability Calculator
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ProbabilityInput
              control={control}
              label="Probability A"
              field="probabilityA"
              error={errors.probabilityA}
            />
          </Grid>
          <Grid item xs={6}>
            <ProbabilityInput
              control={control}
              label="Probability B"
              field="probabilityB"
              error={errors.probabilityB}
            />
          </Grid>
          <Grid item xs={12}>
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
                  fullWidth
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
          </Grid>

          <Grid item xs={3}>
            <Button type="submit" variant="outlined" color="primary">
              Calculate
            </Button>
          </Grid>

          <Grid item xs={9}>
            {calculationResult && (
              <Typography variant="h4" style={{ textAlign: "right" }}>
                Result: {calculationResult}
              </Typography>
            )}
          </Grid>
        </Grid>
      </form>
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
          fullWidth
          inputProps={{ step: "step" }}
          error={Boolean(error)}
          helperText={error && errorText[error.type]}
        />
      )}
    />
  );
};

export default ProbabilityCalculatorApp;
