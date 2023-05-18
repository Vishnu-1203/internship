import React, { useState } from "react";
import Buttons from "./components/button";
import CalculatorDisplay from "./components/CalculatorDisplay";
import { add, subtract, multiply, divide } from "./calcs";
import "./styles2.css";
const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [enteredValue, SetEnteredValue] = useState("");
  const [var1, setVar1] = useState("");
  let result: string;
  let result2: string;
  const handleNumberClick = (num: string) => {
    if (displayValue !== "0") {
      setDisplayValue(displayValue + num);
    } else {
      setDisplayValue(num);
    }
  };
  const handleAcClick = () => {
    setDisplayValue("0");
    SetEnteredValue("");
    setVar1("");
  };
  const handleOperatorClick = (op: string) => {
    if (enteredValue === "") {
      SetEnteredValue(displayValue);
      setVar1(op);
      setDisplayValue("");
    } else {
      switch (var1) {
        case "+":
          result = add(enteredValue, displayValue);
          break;
        case "-":
          result = subtract(displayValue, enteredValue);
          break;
        case "/":
          result = divide(enteredValue, displayValue);
          break;
        case "*":
          result = multiply(enteredValue, displayValue);
          break;
        default:
          break;
      }
      setDisplayValue(result);
      SetEnteredValue("");
      setVar1(op); // Update the var1 value to the current operator
    }
  };

  const handleResultClick = () => {
    if (enteredValue !== "") {
      switch (var1) {
        case "+":
          result2 = add(displayValue, enteredValue);
          break;
        case "-":
          result2 = subtract(displayValue, enteredValue);
          break;
        case "/":
          result2 = divide(displayValue, enteredValue);
          break;
        case "*":
          result2 = multiply(displayValue, enteredValue);
          break;
        default:
          break;
      }
      setDisplayValue(result2);
      SetEnteredValue("");
      setVar1("");
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="var1">{var1}</div>
        <CalculatorDisplay
          previousValue={enteredValue}
          currentValue={displayValue}
        />
        <div>
          <Buttons
            handleNumberClick={handleNumberClick}
            handleAcClick={handleAcClick}
            handleOperatorClick={handleOperatorClick}
            handleResultClick={handleResultClick}
          />
        </div>
      </div>
    </>
  );
};

export default App;
