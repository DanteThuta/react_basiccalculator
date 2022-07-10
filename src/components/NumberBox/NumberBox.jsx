import React from "react";
import "./NumberBox.css";

import Number from "../NumberIcon/NumberIcon";

function NumberBox({ children }) {

  return <div className="number-box">{children}</div>;
}

export default NumberBox;
