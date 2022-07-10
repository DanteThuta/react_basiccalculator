import "./App.css";
import { Wrapper } from "./components/index";

import NumberBox from "./components/NumberBox/NumberBox";
import Number from "./components/Number/Number";

function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  // console.log(btnValues);

  return (
    <Wrapper>
      <NumberBox>
        {btnValues.flat().map((number, i) => {
          return (
            <Number
              key={i}
              value={number}
              onClick={() => console.log("clicked")}
            />
          );
        })}
      </NumberBox>
    </Wrapper>
  );
}

export default App;
// https://github.com/madzadev/calculator/tree/master/src/components
