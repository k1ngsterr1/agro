import React from "react";
import logo from "..//../assets/logo.svg";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import ButtonCommunicate from "../Buttons/ButtonCommunicate/ButtonCommunicate";

import "../Header/header.scss";

const Header = (props) => {
  return (
    <>
      <section className="mobile-screen">
        <header className="header">
          <nav className="header__items">
            <img src={logo} alt="logo" className="header__logo" />
            <Hamburger
              className="header__hamburger"
              color="#289225"
              toggled={props.isOpen}
              toggle={props.toggleMenu}
            />
          </nav>
        </header>
      </section>
      <section className="pc-screen">
        <header className="header-pc">
          <nav className="header-pc__content">
            <img src={logo} alt="logo" className="header-pc__logo" />
            <div className="header-pc__content__text-s">
              <Link smooth to="main">
                <p className="header-pc__content__text">Главная</p>
              </Link>
              <Link smooth to="about-pc">
                <p className="header-pc__content__text">О компании</p>
              </Link>
              <Link smooth to="services">
                <p className="header-pc__content__text">Услуги</p>
              </Link>
              <Link smooth to="consultation">
                <p className="header-pc__content__text">Контакты</p>
              </Link>
            </div>
            <div className="header-pc__content__btn">
              <Link smooth to="consultation">
                <button className="header-pc__content__button">
                  Заказать звонок
                </button>
              </Link>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Header;
