import { CalculationTypes } from "../../calculator/probabilityCalculations";
import config from "../../config";

interface LogTracePayload {
  calculationType: CalculationTypes;
  inputs: number[];
  result: number;
}

export const logTrace = async (payload: LogTracePayload) => {
  try {
    await fetch(config.TRACE_LOG_API_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    /*
        Intentionally ignoring errors here. Assuming that the logging functionality
        is mainly for metrics gathering and less important than the app continuing to 
        function as normal.
    */
  }
};
