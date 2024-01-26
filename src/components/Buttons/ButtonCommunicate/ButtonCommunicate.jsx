import React from "react";
import "../../Buttons/ButtonCommunicate/style.scss";

const ButtonCommunicate = ({ className, text }) => {
  return <button className={`${className}`}>{text}</button>;
};

export default ButtonCommunicate;
