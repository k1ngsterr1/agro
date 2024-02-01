import React from "react";
import "../ServiceBox/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ServiceBox = ({ icon, margin, caption, text }) => {
  return (
    <div className={`service_box ${margin}`}>
      <FontAwesomeIcon className="service_box__icon" icon={icon} />
      <p className="service_box__heading">{caption}</p>
      <span className="service_box__paragraph">{text}</span>
      <button id="button" className="service_box__button">
        <FontAwesomeIcon
          className="service_box__button__icon"
          icon={faChevronRight}
        />
      </button>
    </div>
  );
};

export default ServiceBox;
