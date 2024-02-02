import React, { useState, useEffect } from "react";
// import Loader from "../components/Loadingscreen/LoadingScreen.jsx";
import Mainscreen from "../screens/MainScreen/Mainscreen.jsx";
import AboutScreen from "../screens/AboutScreen/AboutScreen.jsx";
import ServicesScreen from "../screens/ServicesScreen/ServicesScreen.jsx";
import ConsultationScreen from "../screens/ConsultationScreen/ConsultationScreen.jsx";
import { ModalWindow } from "../components/ModalWindow/index.jsx";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const isModalVisible = useSelector((state) => state.modalSlice.isShown);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Agro Partners PV - Специалисты в области эскпорта зерновых и масличных
          культур
        </title>
        <meta
          property="og:title"
          content="Agro Partners PV - Специалисты в области эскпорта зерновых и масличных
          культур"
        ></meta>
        <meta
          property="og:description"
          content="Agro Partners PV - ваш надежный экспортер зерновых и масличных культур. Мы предлагаем качественные продукты с полей Казахстана, обеспечивая лучший сервис и поддержку на каждом этапе сотрудничества."
        />
        <meta
          name="description"
          content="Agro Partners PV - ваш надежный экспортер зерновых и масличных культур. Мы предлагаем качественные продукты с полей Казахстана, обеспечивая лучший сервис и поддержку на каждом этапе сотрудничества."
        />
      </Helmet>
      <Mainscreen />
      {isModalVisible && <ModalWindow />}
      <AboutScreen />
      <ServicesScreen />
      <ConsultationScreen />
    </>
  );
};

export default HomePage;
