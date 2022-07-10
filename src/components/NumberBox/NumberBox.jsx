import React from "react";
import "./NumberBox.css";

import Number from "../Number/Number";

const NumberBox = ({ children }) => {
  return <div className="number-box">{children}</div>;
};

export default NumberBox;
