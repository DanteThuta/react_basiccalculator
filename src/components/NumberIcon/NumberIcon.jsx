import React from "react";
import "./NumberIcon.css";

const NumberIcon = ({ className, value, onClick }) => {
  // console.log(className);

  return (
    <div
      className={value === "=" ? "number  equals" : "number "}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default NumberIcon;
