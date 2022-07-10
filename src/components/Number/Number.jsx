import React from "react";
import "./Number.css";

const Number = ({ value, onClick }) => {
  return (
    <div className="number" onClick={onClick}>
      {value}
    </div>
  );
};

export default Number;
