import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./loading.scss";
import loaderlogo from "../../assets/loaderlogo.svg";
import "../../styles/variables.scss";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsLoading(false);
      document.body.classList.remove("no-scroll"); // Удаляем класс, чтобы включить скролл обратно
    }, 1500);
    document.body.classList.add("no-scroll");
    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return isVisible ? (
    <div>
      <section className="loader-mobile">
        <nav className="loader-mobile__container">
          <img src={loaderlogo} alt="load" className="loader-mobile__img" />
          <BeatLoader color="white" size="20" className="loader-mobile__dots" />
        </nav>
      </section>
      <section className="loader-pc">
        <nav className="loader-pc__container">
          <img src={loaderlogo} alt="load" className="loader-pc__img" />
          <BeatLoader color="white" size="30" className="loader-pc__dots" />
        </nav>
      </section>
    </div>
  ) : null;
};

export default Loader;
