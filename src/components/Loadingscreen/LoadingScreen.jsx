import React from "react";
import Reveal from "react-awesome-reveal";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./style.scss";
import loaderlogo from "../../assets/loaderlogo.svg";

function Loader() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "auto";
      setloading(false);
    }, 1500);
  }, []);

  return (
    <div className="loader">
      <div className="loader-container">
        <img src="{loaderlogo}" alt="icon" />
        <BeatLoader
          className="beatLoader"
          color={"white"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;
