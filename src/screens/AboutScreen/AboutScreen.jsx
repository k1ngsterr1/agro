import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import "../AboutScreen/about.scss";
import ButtonCommunicate from "../../components/Buttons/ButtonCommunicate/ButtonCommunicate";

function AboutScreen() {
  return (
    <>
      <div className="about-mob" id="about">
        <div className="about__content">
          <div className="about__content__text-section">
            <Slide direction="right" triggerOnce>
              <h2 className="about__content__heading mt8">
                <span className="about__content__span">
                  <strong>Огромный опыт на </strong>
                </span>
                <strong>в сфере сельскохозяйственных культур</strong>
              </h2>
            </Slide>
            <Slide direction="right" triggerOnce>
              <p className="about__content__paragraph mt32">
                Компания «Agro Partners PV» зарекомендовала себя как честный,
                ответственный исполнитель, что позволяет выстраивать грамотные
                взаимоотношения с фермерскими хозяйствами, перевозчиками, а
                также организациями, связанными с оформлением документов на
                экспорт.
              </p>
            </Slide>
            <Slide direction="right" triggerOnce>
              <p className="about__content__paragraph mt16">
                В условиях глобализации аграрного рынка, оперативность,
                прозрачность и взаимное доверие являются ключевыми факторами
                успешного сотрудничества.
              </p>
            </Slide>
          </div>
          <div className="about__content__statistics">
            <Slide direction="right" triggerOnce>
              <dl className="about__content__number mt32">4</dl>
              <dt className="about__content__description mt8">
                Года на рынке{" "}
              </dt>
            </Slide>
            <Slide direction="right" triggerOnce>
              <dl className="about__content__number mt32">400 000</dl>
              <dt className="about__content__description mt8">
                Тонн пшеницы отгруженно
              </dt>
            </Slide>
            <Slide direction="right" triggerOnce>
              <dl className="about__content__number mt32">50 000</dl>
              <dt className="about__content__description mt8">
                Семян подсолнечника отгруженно
              </dt>
            </Slide>
            <Slide direction="right" triggerOnce>
              <dl className="about__content__number mt32">100</dl>
              <dt className="about__content__description mt8">
                Крестьянских хозяйств работают с нами
              </dt>
            </Slide>
          </div>
          <div className="about__content__button mt32">
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
      <div className="about-pc" id="about-pc">
        <div className="about-pc__content">
          <div className="about-pc__content__text-section">
            <Fade direction="up" triggerOnce>
              <h2 className="about-pc__content__heading">
                <span>Огромный опыт </span>в сфере сельскохозяйственных культур
              </h2>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p className="about-pc__content__paragraph mt32-pc">
                Компания «Agro Partners PV» зарекомендовала себя как честный,
                ответственный исполнитель, что позволяет выстраивать грамотные
                взаимоотношения с фермерскими хозяйствами, перевозчиками, а
                также организациями, связанными с оформлением документов на
                экспорт.
              </p>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p className="about-pc__content__paragraph mt32-pc">
                В условиях глобализации аграрного рынка, оперативность,
                прозрачность и взаимное доверие являются ключевыми факторами
                успешного сотрудничества.
              </p>
            </Fade>
          </div>
          <div className="about-pc__content__button mt32">
            <Link smooth to="consultation">
              <Fade direction="up" triggerOnce>
                <ButtonCommunicate
                  text={"Связаться с нами"}
                  className={"basic-pc"}
                />
              </Fade>
            </Link>
          </div>
          <div className="about-pc__content__statistics">
            <Slide direction="left" triggerOnce>
              <div className="about-pc__content__statistics-item">
                <dl className="about-pc__content__number">4</dl>
                <dt className="about-pc__content__description">
                  Года на рынке
                </dt>
              </div>
            </Slide>
            <Slide direction="left" triggerOnce>
              <div className="about-pc__content__statistics-item">
                <dl className="about-pc__content__number">400 000</dl>
                <dt className="about-pc__content__description">
                  Тонн пшеницы отгруженно
                </dt>
              </div>
            </Slide>
            <Slide direction="left" triggerOnce>
              <div className="about-pc__content__statistics-item">
                <dl className="about-pc__content__number"> 50 000 </dl>
                <dt className="about-pc__content__description">
                  Тонн семян подсолнечника отгруженно
                </dt>
              </div>
            </Slide>
            <Slide direction="left" triggerOnce>
              <div className="about-pc__content__statistics-item">
                <dl className="about-pc__content__number">100</dl>
                <dt className="about-pc__content__description">
                  Крестьянских хозяйств работают с нами
                </dt>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutScreen;
