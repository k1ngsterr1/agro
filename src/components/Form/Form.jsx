import React from "react";
import { Slide } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import ButtonMore from "../Buttons/ButtonMore/ButtonMore";
import ButtonCommunicate from "../Buttons/ButtonCommunicate/ButtonCommunicate";
import useSendEmail from "../../hooks/useSendEmail";

import "../Form/form.scss";

const Form = () => {
  const { onSubmit } = useSendEmail();
  const { handleSubmit, register } = useForm();
  const handleFormSubmit = (data, e) => onSubmit(data, e);

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <nav className="form__content">
        <div className="form__card">
          <div className="form__input-name">
            <input
              {...register("name")}
              required
              placeholder="Ваше имя"
              className="form__input"
              name="name"
            />
          </div>
          <div className="form__input-phone">
            <input
              {...register("phone_number")}
              required
              className="form__input"
              name="phone_number"
              placeholder="Ваш телефон"
            />
          </div>
        </div>
        <div className="form__select-card">
          <select
            className="form__select"
            {...register("service")}
            name="service"
          >
            <option value="Сопровождение" className="form__select-option">
              Сопровождение
            </option>
            <option value="Поиск" className="form__select-option">
              Поиск
            </option>
            <option value="Комплекс" className="form__select-option">
              Комлпекс
            </option>
          </select>
        </div>
      </nav>
      <div className="mobile-btn">
        <Slide direction="right" triggerOnce>
          <ButtonCommunicate
            text={"Отправить"}
            type={"submit"}
            className={"basic"}
          />
        </Slide>
      </div>
      <div className="pc-btn">
        <Slide direction="right" triggerOnce>
          <ButtonMore text={"Отправить"} className={"basic-pc"} type="submit" />
        </Slide>
      </div>
    </form>
  );
};

export default Form;
