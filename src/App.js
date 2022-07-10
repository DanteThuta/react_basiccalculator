import React, { useState } from "react";
import "./App.css";
import { Wrapper } from "./components/index";

import NumberBox from "./components/NumberBox/NumberBox";
import NumberIcon from "./components/NumberIcon/NumberIcon";
import Display from "./components/Display/Display";

const App = () => {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  //implement for data Gather
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  //Number Handler
  const numberHandler = (e) => {
    e.preventDefault();

    const value = e.target.innerHTML;
    console.log(calc.num);

    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === 0
          ? 0
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      result: !calc.sign ? 0 : calc.result,
    });
    // console.log(calc);
  };
  //Number Handler(End)

  // Sign Handler
  const signHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
    // console.log(calc);
  };
  // Sign Handler(End)

  //Equal Handler
  const equalHandler = () => {
    if (calc.num && calc.result) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        result:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(parseInt(calc.result), parseInt(calc.num), calc.sign),
        num: 0,
        sign: "",
      });
      console.log(calc);
    }
  };
  //Equal Handler (End)
  // Notes: Can't do with const math =()=>{}

  //Reset Handler
  const resetHandler = (e) => {
    setCalc({
      sign: "",
      num: 0,
      result: 0,
    });
  };
  //Reset Handler(End)

  return (
    <>
      <h1 className="main-heading">
        React Calculator<span className="cursor">|</span>
      </h1>
      <Wrapper>
        <Display value={calc.num ? calc.num : calc.result} />
        <NumberBox>
          {btnValues.flat().map((number, i) => {
            return (
              <NumberIcon
                key={i}
                value={number}
                // className={number === "=" ? "equals" : ""}
                onClick={
                  number === "C"
                    ? resetHandler
                    : number === "="
                    ? equalHandler
                    : number === "/" ||
                      number === "X" ||
                      number === "-" ||
                      number === "+"
                    ? signHandler
                    : numberHandler
                }
              />
            );
          })}
        </NumberBox>
      </Wrapper>
    </>
  );
};

export default App;
// https://github.com/madzadev/calculator/tree/master/src/components
