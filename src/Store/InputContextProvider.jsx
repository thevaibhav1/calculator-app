import { useState } from "react";
import { InputContext } from "./InputContext";
import { evaluateExpression } from "../utils/Calculation.js";

const InputContextProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [calculation, setCalculation] = useState("");
  const handleClick = (identifier) => {
    setValue((prev) => prev + identifier);
    console.log(value);
  };

  const clearInputValue = () => {
    setValue("");
    setCalculation("");
  };

  //   const result = evaluateExpression(value);
  const calculateRes = () => {
    try {
      const result = evaluateExpression(value);
      setCalculation(String(result));
      setValue("");
    } catch (err) {
      setCalculation("Error");
      setValue("");
    }
  };
  const val = {
    identifier: value,
    calculation: calculation,
    handleClick: handleClick,
    clearInputValue: clearInputValue,
    calculateRes: calculateRes,
  };
  return <InputContext.Provider value={val}>{children}</InputContext.Provider>;
};
export default InputContextProvider;
