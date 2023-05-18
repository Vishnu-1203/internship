import React, { useState } from "react";
import Buttons from "./components/button";
import CalculatorDisplay from "./components/CalculatorDisplay";
import { add, subtract, multiply, divide } from "./calcs";
import "./styles2.css";

const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [enteredValue, setEnteredValue] = useState("");
  const [var1, setVar1] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  let result: string = "";

  const handleNumberClick = (num: string) => {
    if (displayValue !== "0") {
      setDisplayValue(displayValue + num);
    } else {
      setDisplayValue(num);
    }
  };

  const handleAcClick = () => {
    setDisplayValue("0");
    setEnteredValue("");
    setVar1("");
  };

  const handleOperatorClick = (op: string) => {
    if (enteredValue === "") {
      setEnteredValue(displayValue);
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
      setEnteredValue("");
      setVar1(op);
    }
  };

  const handleResultClick = () => {
    if (enteredValue !== "") {
      switch (var1) {
        case "+":
          result = add(displayValue, enteredValue);
          break;
        case "-":
          result = subtract(displayValue, enteredValue);
          break;
        case "/":
          result = divide(displayValue, enteredValue);
          break;
        case "*":
          result = multiply(displayValue, enteredValue);
          break;
        default:
          break;
      }
      setDisplayValue(result);
      setEnteredValue("");
      setVar1("");
      setHistory([...history, result].slice(-10)); // Update the history with the last 10 results
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
        <div className="history">
          History:
          {history.map((calculation, index) => (
            <div key={index}>{calculation}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
