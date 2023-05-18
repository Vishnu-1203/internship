import React from "react";

interface CalculatorDisplayProps {
  previousValue: string;
  currentValue: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  previousValue,
  currentValue,
}) => {
  return (
    <div className="calculator-display">
      <span className="previous-value">{previousValue}</span>
      <span className="current-value">{currentValue}</span>
    </div>
  );
};

export default CalculatorDisplay;
