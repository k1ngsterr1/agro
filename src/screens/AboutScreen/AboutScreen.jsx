import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";
import "../AboutScreen/about.scss";

function AboutScreen() {
  return (
    <div className="about" id="about">
      <div className="about__company">
        <div className="about__content">
          <div className="about__text-section">
            <Slide direction="right" triggerOnce>
              <p className="about__mini-text">О компании</p>
            </Slide>
            <Slide direction="right" delay={200} triggerOnce>
              <h1 className="about__heading mt8">
                <span className="about__span">
                  <strong>Огромный опыт на </strong>
                </span>
                <strong>сельскохозяйственных культур</strong>
              </h1>
            </Slide>
            <Slide direction="right" delay={300} triggerOnce>
              <p className="about__paragraph mt32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </Slide>
            <Slide direction="right" delay={400} triggerOnce>
              <p className="about__paragraph mt16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
