import { useContext } from "react";
import { InputContext } from "../Store/InputContext";
import "./Number.css";
const Number = () => {
  const { handleClick, clearInputValue, calculateRes } =
    useContext(InputContext);

  return (
    <div className="number-block">
      <div className="number-block-inner">
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => clearInputValue()}>C</button>
        <button onClick={() => calculateRes()}>=</button>
      </div>
    </div>
  );
};
export default Number;
