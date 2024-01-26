import React, { useState, useEffect } from "react";
import Loader from "../components/Loadingscreen/LoadingScreen.jsx";
import Mainscreen from "../screens/MainScreen/Mainscreen.jsx";
import AboutScreen from "../screens/AboutScreen/AboutScreen.jsx";

const HomePage = () => {
  return (
    <>
      <Mainscreen />
      <AboutScreen />
    </>
  );
};

export default HomePage;
