import React from "react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import Menu from "../../components/Menu/Menu.jsx";
import Header from "../../components/Header/Header.jsx";
import Loader from "../../components/Loadingscreen/LoadingScreen.jsx";
import ButtonMore from "../../components/Buttons/ButtonMore/ButtonMore.jsx";
import "./main.scss";

import Field from "../../assets/agro.webp";

const MainScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <section className="main-screen-mobile">
      <main className="main" id="main">
        <Header isOpen={isOpen} toggleMenu={toggleMenu} />
        {isOpen && <Menu isOpen={isOpen} toggleMenu={toggleMenu} />}
        <div className="main__content">
          <div className="main__text-section">
            <Fade direction="up" triggerOnce>
              <p className="main__mini-text">Главная</p>
            </Fade>
            <Fade direction="up" delay={200} triggerOnce>
              <h1 className="main__heading">
                <span className="main__span">Ваш представитель в </span>
                <strong>Павлодарской Области</strong>
              </h1>
            </Fade>
            <Fade direction="up" delay={300} triggerOnce>
              <p className="main__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </Fade>
          </div>
          <div className="main__button">
            <Link smooth to="about">
              <Fade direction="up" delay={400} triggerOnce>
                <ButtonMore text={"Подробнее"} className={"outline"} />
              </Fade>
            </Link>
          </div>
        </div>
        <img src={Field} alt="icon" className="main__field" />
      </main>
    </section>
  );
};

export default MainScreen;
