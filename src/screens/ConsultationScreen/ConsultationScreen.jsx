import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";
import "../ConsultationScreen/consultation.scss";
import ButtonCommunicate from "../../components/Buttons/ButtonCommunicate/ButtonCommunicate";

function ConsultationScreen() {
  return (
    <div className="consultation" id="consultation">
      <div className="consultation__content mt64">
        <div className="consultation__text-section">
          <Slide direction="right" triggerOnce>
            <p className="consultation__mini-text">Контакты</p>
          </Slide>
          <Slide direction="right" triggerOnce>
            <h1 className="consultation__heading mt8">
              <span className="consultation__span">
                <strong>Получить </strong>
              </span>
              <strong>консультацию</strong>
            </h1>
          </Slide>
          <Slide direction="right" triggerOnce>
            <p className="consultation__paragraph mt32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </Slide>
        </div>
        <div className="consultation__button mt32">
          <Link smooth to="#">
            <Slide direction="right" triggerOnce>
              <ButtonCommunicate text={"Отправить"} className={"basic"} />
            </Slide>
          </Link>
        </div>
        <div className="consultation__contacts">
          <Slide
            direction="right"
            triggerOnce
            className="consultation__contact mt64"
          >
            <a
              href="mailto:specialsolutions@info.kz"
              className="consultation__contact"
            >
              specialsolutions@info.kz
            </a>
          </Slide>
          <Slide
            direction="right"
            className="consultation__contact mt32"
            triggerOnce
          >
            <a href="tel:+77764490449" className="consultation__contact">
              +7 (776) 449-04-49
            </a>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default ConsultationScreen;
