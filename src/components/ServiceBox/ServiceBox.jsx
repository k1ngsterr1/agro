import React from "react";
import "../ServiceBox/style.scss";
import Arrow from "../../assets/arrow.svg";
import teampicture from "../../assets/teampicture.svg";
import { faFontAwesomeFlag } from "@fortawesome/free-solid-svg-icons";
const ServiceBox = ({ className, svg, caption, text }) => {
  return (
    <dl className={`${className}`}>
      <faFontAwesomeIcon icon={teampicture} />
      <p>{caption}</p>
      <dt>{text}</dt>
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow mt32"
      >
        <g id="button">
          <circle id="Ellipse 169" cx="24" cy="24.5986" r="24" fill="#289225" />
          <path
            id="Vector 47"
            d="M20 16.5986L28 24.5986L20 32.5986"
            stroke="white"
            stroke-width="2"
          />
        </g>
      </svg>
    </dl>
  );
};

export default ServiceBox;
