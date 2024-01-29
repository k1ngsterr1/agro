import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";
import "../AboutScreen/about.scss";
import ButtonCommunicate from "../../components/Buttons/ButtonCommunicate/ButtonCommunicate";

function AboutScreen() {
  return (
    <div className="about" id="about">
      <div className="about__content mt64">
        <div className="about__text-section">
          <Slide direction="right" triggerOnce>
            <p className="about__mini-text">О компании</p>
          </Slide>
          <Slide direction="right" triggerOnce>
            <h1 className="about__heading mt8">
              <span className="about__span">
                <strong>Огромный опыт на </strong>
              </span>
              <strong>сельскохозяйственных культур</strong>
            </h1>
          </Slide>
          <Slide direction="right" triggerOnce>
            <p className="about__paragraph mt32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </Slide>
          <Slide direction="right" triggerOnce>
            <p className="about__paragraph mt16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Slide>
        </div>
        <div className="about__statistics">
          <Slide direction="right" triggerOnce>
            <dl className="about__number mt32">600</dl>
            <dt className="about__description mt8">
              Lorem ipsum dolor sit amet,
            </dt>
          </Slide>
          <Slide direction="right" triggerOnce>
            <dl className="about__number mt32">600</dl>
            <dt className="about__description mt8">
              Lorem ipsum dolor sit amet,
            </dt>
          </Slide>
          <Slide direction="right" triggerOnce>
            <dl className="about__number mt32">600</dl>
            <dt className="about__description mt8">
              Lorem ipsum dolor sit amet,
            </dt>
          </Slide>
          <Slide direction="right" triggerOnce>
            <dl className="about__number mt32">600</dl>
            <dt className="about__description mt8">
              Lorem ipsum dolor sit amet,
            </dt>
          </Slide>
        </div>
        <div className="about__button mt32">
          <Link smooth to="consultation">
            <Slide direction="right" triggerOnce>
              <ButtonCommunicate
                text={"Связаться с нами"}
                className={"basic"}
              />
            </Slide>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
