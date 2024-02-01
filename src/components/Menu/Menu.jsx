import React from "react";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import Hamburger from "hamburger-react";
import "./menu.scss";

const Menu = ({ closeMenu }) => {
  return (
    <Slide direction="right" duration={1000}>
      <aside className="aside">
        <div className="aside__container mt48">
          <Slide direction="right">
            <Link
              onClick={closeMenu}
              className="aside__container-item"
              smooth
              to="about"
              duration={500}
            >
              Главная
            </Link>
          </Slide>
          <Link
            onClick={closeMenu}
            className="aside__container-item mt32"
            smooth
            to="about"
            duration={500}
          >
            <Slide direction="right">О компании</Slide>
          </Link>

          <Link
            onClick={closeMenu}
            className="aside__container-item mt32"
            smooth
            to="services"
          >
            <Slide direction="right">Услуги</Slide>
          </Link>
          <Link
            onClick={closeMenu}
            to="consulation"
            className="aside__container-item mt32"
          >
            <Slide direction="right">Связаться с нами</Slide>
          </Link>
          <div className="contact mt64">
            <Slide direction="right">
              <a href="tel:+77764490449" className="contact__item">
                +7 (700) 333-38-26
              </a>
            </Slide>
            <Slide direction="right" className="contact__item mt16">
              <a
                href="mailto:specialsolutions@info.kz"
                className="contact__item"
              >
                ceo@agropv.kz
              </a>
            </Slide>
          </div>
        </div>
      </aside>
    </Slide>
  );
};

export default Menu;
