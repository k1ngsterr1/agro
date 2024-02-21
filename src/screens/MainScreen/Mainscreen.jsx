import React from "react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import Menu from "../../components/Menu/Menu.jsx";
import Header from "../../components/Header/Header.jsx";
import Loader from "../../components/Loadingscreen/LoadingScreen.jsx";
import ButtonMore from "../../components/Buttons/ButtonMore/ButtonMore.jsx";
import "./main.scss";

import Field from "../../assets/wheat_main.webp";

const MainScreen = () => {
  const closeMenu = () => {
    setIsOpen(false);
    console.log("ZHOPA");
  };
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    console.log(isOpen);
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
      <Loader />
      <main className="main" id="main">
        <Header isOpen={isOpen} toggleMenu={toggleMenu} />
        {isOpen && (
          <Menu isOpen={isOpen} closeMenu={closeMenu} toggleMenu={toggleMenu} />
        )}
        <div className="main__content">
          <div className="main__text-section">
            <Fade direction="up" delay={200} triggerOnce>
              <h1 className="main__heading">
                <span className="main__span">Ваш представитель в </span>
                <strong>Павлодарской Области</strong>
              </h1>
            </Fade>
            <Fade direction="up" delay={300} triggerOnce>
              <p className="main__paragraph">
                «AGRO PARTNERS PV» – группа специалистов, готовая помочь в
                поиске решений по вопросам экспорта зерновых и масличных
                культур.
              </p>
            </Fade>
          </div>
          <div className="main__button">
            <Fade direction="up" delay={400} triggerOnce>
              <Link smooth to="about">
                <ButtonMore text={"Подробнее"} className={"outline"} />
              </Link>
            </Fade>
          </div>
          <div className="main__button-pc">
            <Fade direction="up" delay={400} triggerOnce>
              <Link smooth to="about-pc">
                <ButtonMore text={"Подробнее"} className={"outline"} />
              </Link>
            </Fade>
          </div>
        </div>
        <img src={Field} alt="icon" className="main__field" />
      </main>
    </section>
  );
};

export default MainScreen;
