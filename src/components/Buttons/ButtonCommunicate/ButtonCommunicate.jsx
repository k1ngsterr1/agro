import React from "react";
import "../../Buttons/ButtonCommunicate/style.scss";

const ButtonCommunicate = ({ className, text, type, onClick }) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonCommunicate;
