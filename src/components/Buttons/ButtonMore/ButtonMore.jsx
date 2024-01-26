import React from "react";
import "../../Buttons/ButtonMore/style.scss";

const ButtonMore = ({ className, text }) => {
  return <button className={`${className}`}>{text}</button>;
};

export default ButtonMore;
