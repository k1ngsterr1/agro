import React from "react";
import Hamburger from "react-hamburger-menu";
import { Link as ScrollLink, Link } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";
import "./menu.scss";

import logo from "..//../assets/logo.svg";

const Menu = (props) => {
  return (
    <Slide className="menu" direction="down" triggerOnce>
      <nav className="menu__links">
        <div className="menu__hamburger">
          <Hamburger
            color="#289225"
            toggled={props.isOpen}
            toggle={props.toggleMenu}
          />
        </div>
        <img src={logo} alt="logo" className="menu__logo" />
        <ScrollLink onClick={props.closeMenu} className="menu__item" smooth>
          <Fade direction="right" delay={200}>
            Главная
          </Fade>
        </ScrollLink>
        <ScrollLink onClick={props.closeMenu} className="menu__item" smooth>
          <Fade direction="left" delay={300}>
            О компании
          </Fade>
        </ScrollLink>
        <ScrollLink onClick={props.closeMenu} className="menu__item" smooth>
          <Fade direction="right" delay={400}>
            Услуги
          </Fade>
        </ScrollLink>
        <ScrollLink onClick={props.closeMenu} className="menu__item" smooth>
          <Fade direction="left" delay={500}>
            Контакты
          </Fade>
        </ScrollLink>

        <ScrollLink onClick={props.closeMenu} className="menu__item" smooth>
          <Fade direction="left" delay={600}>
            Связаться с нами
          </Fade>
        </ScrollLink>
      </nav>
    </Slide>
  );
};

export default Menu;
