import React from "react";
import NumberBox from "../NumberBox/NumberBox";
import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
