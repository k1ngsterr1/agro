import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";
import "../ServicesScreen/services.scss";
import ServiceBox from "../../components/ServiceBox/ServiceBox";
import teampicture from "../../assets/teampicture.svg";
import {
  faBorderAll,
  faMagnifyingGlass,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function ServicesScreen() {
  return (
    <div className="services" id="services">
      <div className="services__content">
        <div className="services__text-section">
          <Slide direction="left" triggerOnce>
            <h3 className="services__heading">
              <span className="services__span">
                <strong>Наши </strong>
              </span>
              <strong>Услуги</strong>
            </h3>
          </Slide>
          <Slide direction="left" triggerOnce>
            <p className="services__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </Slide>
        </div>
        <div className="services__box">
          <div className="service__box-item">
            <Fade direction="up" triggerOnce>
              <ServiceBox
                text={
                  "Официально представляем интересы Вашей компании, избавляя от необходимости личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов."
                }
                icon={faUserGroup}
                caption={"Сопровождение"}
                margin={"mt32"}
              />
            </Fade>
          </div>
          <div className="service__box-item">
            <Fade direction="up" triggerOnce>
              <ServiceBox
                text={
                  "За 4 года активной работы мы наладили отношения с сотнями фермерских хозяйств, экспортировав более 400 000 тонн пшеницы."
                }
                icon={faMagnifyingGlass}
                caption={"Поиск"}
                margin={"mt32"}
              />
            </Fade>
          </div>
          <div className="service__box-item">
            <Fade direction="up" delay={300} triggerOnce>
              <ServiceBox
                text={
                  "Комплексная услуга по поиску, а также юридическому, логистическому сопровождению контрактных отношений."
                }
                icon={faBorderAll}
                caption={"Сопровождение"}
                margin={"mt32"}
              />
            </Fade>
          </div>
          {/* <div className="service__box-odd">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ServicesScreen;
