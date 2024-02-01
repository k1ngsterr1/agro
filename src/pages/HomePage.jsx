import React, { useState, useEffect } from "react";
// import Loader from "../components/Loadingscreen/LoadingScreen.jsx";
import Mainscreen from "../screens/MainScreen/Mainscreen.jsx";
import AboutScreen from "../screens/AboutScreen/AboutScreen.jsx";
import ServicesScreen from "../screens/ServicesScreen/ServicesScreen.jsx";
import ConsultationScreen from "../screens/ConsultationScreen/ConsultationScreen.jsx";

const HomePage = () => {
  return (
    <>
      <Mainscreen />
      <AboutScreen />
      <ServicesScreen />
      <ConsultationScreen />
    </>
  );
};

export default HomePage;
