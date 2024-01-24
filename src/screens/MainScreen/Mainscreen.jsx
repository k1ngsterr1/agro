import React from "react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import Menu from "../../components/Menu/Menu.jsx";
import Header from "../../components/Header/Header.jsx";
import Loader from "../../components/Loadingscreen/LoadingScreen.jsx";
import "./main.scss";

import field from "../../assets/agro.webp";

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
  return;
  <section className="main-screen-mobile">
    <Loader />
  </section>;
};

export default MainScreen;
