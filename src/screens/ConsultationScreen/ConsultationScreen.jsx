import React from "react";
import { Slide } from "react-awesome-reveal";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Field from "../../assets/wheat_form.webp";

import "../ConsultationScreen/consultation.scss";

function ConsultationScreen() {
  return (
    <div className="consultation" id="consultation">
      <div className="consultation__content">
        <div className="consultation__text-section">
          <Slide direction="right" triggerOnce>
            <h4 className="consultation__heading">
              <span className="consultation__span">
                <strong>Получить </strong>
              </span>
              <strong>консультацию</strong>
            </h4>
          </Slide>
          <Slide direction="right" triggerOnce>
            <p className="consultation__paragraph">
              В мире агробизнеса каждая деталь имеет значение. "Agro Partners
              PV" предлагает вам своё экспертное мнение в области экспорта
              пшеничных и масличных культур.
            </p>
          </Slide>
        </div>
        <Slide direction="right" triggerOnce>
          <Form></Form>
        </Slide>
        <img src={Field} alt="" className="consultation__picture" />
        <div className="consultation__contacts">
          <Slide
            direction="right"
            triggerOnce
            className="consultation__contact"
          >
            <a href="mailto:ceo@agropv.kz" className="consultation__contact">
              ceo@agropv.kz
            </a>
          </Slide>
          <Slide
            direction="right"
            className="consultation__contact__number"
            triggerOnce
          >
            <a href="tel:+77003333826" className="consultation__contact">
              +7 (700) 333-38-26
            </a>
          </Slide>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConsultationScreen;
