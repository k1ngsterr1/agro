import React from "react";
import { Link } from "react-scroll";
import ButtonCommunicate from "../../components/Buttons/ButtonCommunicate/ButtonCommunicate";
import "../Footer/footer.scss";

import footerlogo from "../../assets/footerlogo.svg";
import sparklogo from "../../assets/sparklogo.svg";

const Footer = () => {
  return (
    <footer>
      <section className="footer_m">
        <img src={footerlogo} alt="logo" className="footer_m__logo" />
        <nav className="footer_m__nav">
          <Link smooth to="main">
            <h1 className="footer_m__text">Главная</h1>
          </Link>
          <Link smooth to="about">
            <h1 className="footer_m__text">О компании</h1>
          </Link>
          <Link smooth to="services">
            <h1 className="footer_m__text">Услуги</h1>
          </Link>
          <Link smooth to="consultation">
            <h1 className="footer_m__text">Контакты</h1>
          </Link>
          <Link smooth to="main">
            <h1 className="footer_m__btn">Вверх</h1>
          </Link>
        </nav>
        <a href="https://sparkstudio.kz/" target="blank">
          <img src={sparklogo} alt="logo" className="footer_m__sparklogo" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
