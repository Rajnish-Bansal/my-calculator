import React, { useState } from "react";
import "./operations.css";

function Operations() {
  const [result, setResult] = useState("0");

  const clickHandler = (e) => {
    const value = e.target.value;
    if (result === "0") {
      setResult(result.slice(0, -1) + value);
    } else {
      setResult(result + value);
    }
  };

  const handleDecimal = (e) => {
    const value = e.target.value;
    if (result === "0") {
      setResult("0.");
    } else if (!result.includes(".")) {
      setResult(result + value);
    }
  };

  const handleOperator = (e) => {
    if (result !== "0") {
      const value = e.target.value;
      setResult(result + value);
      if (
        String(result).endsWith("+") ||
        String(result).endsWith("-") ||
        String(result).endsWith("/") ||
        String(result).endsWith("*")
      ) {
        setResult(result.slice(0, -1) + value);
      }
      if (
        (String(result).endsWith("+") ||
          String(result).endsWith("-") ||
          String(result).endsWith("/") ||
          String(result).endsWith("*")) &&
        value === "%"
      ) {
        const updatedResult = String(result).slice(0, -1);
        setResult(parseFloat(updatedResult) / 100);
      }
      if (value === "%") {
        setResult(result / 100);
      }
    }
  };

  function clear() {
    setResult("0");
  }

  function backspace() {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(String(result).slice(0, -1));
    }
  }

  const calculate = () => {
    if (
      String(result).endsWith("+") ||
      String(result).endsWith("-") ||
      String(result).endsWith("/") ||
      String(result).endsWith("*")
    ) {
      setResult(eval(String(result).slice(0, -1)));
    } else {
      setResult(eval(result));
    }
  };

  return (
    <div>
      <>
        <div className="container">
          <div className="display-container" placeholder="0">
            {result}
          </div>
          <div className="button-container">
            <div className="row row1">
              <button className="operator" value="C" onClick={clear}>
                C
              </button>
              <button className="operator" value="%" onClick={handleOperator}>
                %
              </button>
              <button className="operator" value="back" onClick={backspace}>
                BACK
              </button>
              <button className="operator" value="/" onClick={handleOperator}>
                /
              </button>
            </div>
            <div className="row">
              <button value="7" onClick={clickHandler}>
                7
              </button>
              <button value="8" onClick={clickHandler}>
                8
              </button>
              <button value="9" onClick={clickHandler}>
                9
              </button>
              <button className="operator" value="*" onClick={handleOperator}>
                x
              </button>
            </div>
            <div className="row">
              <button value="4" onClick={clickHandler}>
                4
              </button>
              <button value="5" onClick={clickHandler}>
                5
              </button>
              <button value="6" onClick={clickHandler}>
                6
              </button>
              <button className="operator" value="-" onClick={handleOperator}>
                -
              </button>
            </div>
            <div className="row">
              <button value="1" onClick={clickHandler}>
                1
              </button>
              <button value="2" onClick={clickHandler}>
                2
              </button>
              <button value="3" onClick={clickHandler}>
                3
              </button>
              <button className="operator" value="+" onClick={handleOperator}>
                +
              </button>
            </div>
            <div className="row">
              <button value="00" onClick={clickHandler}>
                00
              </button>
              <button value="0" onClick={clickHandler}>
                0
              </button>
              <button value="." onClick={handleDecimal}>
                .
              </button>
              <button className="operator" value="=" onClick={calculate}>
                =
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Operations;
