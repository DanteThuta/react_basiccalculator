import React, { useState } from "react";
import "./App.css";
import { Wrapper } from "./components/index";

import NumberBox from "./components/NumberBox/NumberBox";
import Number from "./components/Number/Number";
import Display from "./components/Display/Display";

function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  //implement for data Gather
  const [calc, setCalc] = [
    {
      sign: "",
      num: 0,
      result: 0,
    },
  ];

  const numberHandler = (e) => {
    e.preventDefault();

    const value = e.target.innerHTML;

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num: calc.num === 0 && value === 0 ? 3 : calc.num + 3,
        result: !calc.sign ? "0" : calc.result,
      });
    }
  };
  return (
    <Wrapper>
      <Display value={calc.result} />
      <NumberBox>
        {btnValues.flat().map((number, i) => {
          return <Number key={i} value={number} onClick={numberHandler} />;
        })}
      </NumberBox>
    </Wrapper>
  );
}

export default App;
// https://github.com/madzadev/calculator/tree/master/src/components
