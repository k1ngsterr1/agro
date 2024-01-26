import React from "react";
import logo from "..//../assets/logo.svg";
import Hamburger from "hamburger-react";

import "../Header/header.scss";

const Header = (props) => {
  return (
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
  );
};

export default Header;
