import React from "react";
import "./styles.css";
interface ButtonsProps {
  handleNumberClick: (num: string) => void;
  handleAcClick: () => void;
  handleOperatorClick: (op: string) => void;
  handleResultClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({
  handleNumberClick,
  handleAcClick,
  handleOperatorClick,
  handleResultClick,
}) => {
  return (
    <div>
      <div className="grid">
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="grid-items-rest"
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="grid-items-rest"
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="grid-items-rest"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
        <button
          className="grid-items-numbers"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button className="AC" onClick={() => handleAcClick()}>
          AC
        </button>
        <button className="grid-items-rest" onClick={() => handleResultClick()}>
          =
        </button>
        <button
          className="grid-items-rest"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Buttons;
