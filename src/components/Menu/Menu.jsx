import React from "react";
import Hamburger from "hamburger-react";
import { Link as ScrollLink, Link } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";
import "./menu.scss";

const Menu = (props) => {
  return (
    <Slide direction="right" duration={1000}>
      <aside className="aside">
        <div className="aside__container mt48">
          <Slide direction="right">
            <Link
              onClick={props.closeMenu}
              className="aside__container-item"
              smooth
              to="about"
              duration={500}
            >
              Главная
            </Link>
          </Slide>

          <Link
            onClick={props.closeMenu}
            className="aside__container-item mt32"
            smooth
            to="about"
            duration={500}
          >
            <Slide direction="right">О компании</Slide>
          </Link>

          <Link
            onClick={props.closeMenu}
            className="aside__container-item mt32"
            smooth
            to="services"
          >
            <Slide direction="right">Услуги</Slide>
          </Link>
          <Slide direction="right">
            <button
              onClick={props.closeMenu}
              className="aside__container-item mt32"
            >
              Портфолио
            </button>
          </Slide>
          <Slide direction="right">
            <button
              onClick={props.closeMenu}
              className="aside__container-item mt32"
            >
              <span className="aside__span"> Связаться с нами </span>
            </button>
          </Slide>
          <div className="contact mt64">
            <Slide direction="right">
              <a href="tel:+77764490449" className="contact__item">
                +7 (776) 449-04-49
              </a>
            </Slide>
            <Slide direction="right" className="contact__item mt16">
              <a
                href="mailto:specialsolutions@info.kz"
                className="contact__item"
              >
                specialsolutions@info.kz
              </a>
            </Slide>
          </div>
        </div>
      </aside>
    </Slide>
  );
};

export default Menu;
