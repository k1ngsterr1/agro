import React from "react";
// import Reveal from "react-awesome-reveal";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./loading.scss";
import loaderlogo from "../../assets/loaderlogo.svg";
import { useLoaderAnimation } from "../../animations/useLoaderAnimation";
// import "../../styles/variables.scss";

function Loader() {
  const { loaderRef } = useLoaderAnimation();

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
    <div className="loader" useRef={loaderRef}>
      <div className="loader__container">
        <img src={loaderlogo} alt="icon" className="loader__logo" />
        <BeatLoader
          className="loader__beatloader mt70"
          color={"white"}
          loading={loading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;
