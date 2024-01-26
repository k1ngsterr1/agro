import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";
import "../ServicesScreen/services.scss";
import ServiceBox from "../../components/ServiceBox/ServiceBox";
import teampicture from "../../assets/teampicture.svg";

function ServicesScreen() {
  return (
    <div className="services" id="services">
      <div className="services__content">
        <div className="services__text-section">
          <Slide direction="left" triggerOnce>
            <p className="services__mini-text">Услуги</p>
          </Slide>
          <Slide direction="left" triggerOnce>
            <h1 className="services__heading mt8">
              <span className="services__span">
                <strong>Наши </strong>
              </span>
              <strong>Услуги</strong>
            </h1>
          </Slide>
          <Slide direction="left" triggerOnce>
            <p className="services__paragraph mt32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </Slide>
        </div>
        <div className="services__box">
          <Fade direction="up" triggerOnce>
            <ServiceBox
              text={
                "Официально представляем интересы Вашей компании, избавляя от необходимости личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов."
              }
              svg={teampicture}
              caption={"Сопровождение"}
              className={"servicebox"}
            ></ServiceBox>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <ServiceBox
              text={
                "Официально представляем интересы Вашей компании, избавляя от необходимости личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов."
              }
              svg={teampicture}
              caption={"Сопровождение"}
              className={"servicebox"}
            ></ServiceBox>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <ServiceBox
              text={
                "Официально представляем интересы Вашей компании, избавляя от необходимости личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов."
              }
              svg={teampicture}
              caption={"Сопровождение"}
              className={"servicebox"}
            ></ServiceBox>
          </Fade>
          <Fade direction="up" delay={400} triggerOnce>
            <ServiceBox
              text={
                "Официально представляем интересы Вашей компании, избавляя от необходимости личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов."
              }
              svg={teampicture}
              caption={"Сопровождение"}
              className={"servicebox"}
            ></ServiceBox>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default ServicesScreen;
