import React from "react";
import { useForm } from "react-hook-form";
import { Slide } from "react-awesome-reveal";
import ButtonMore from "../Buttons/ButtonMore/ButtonMore";

import "../Form/form.scss";
import ButtonCommunicate from "../Buttons/ButtonCommunicate/ButtonCommunicate";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <nav className="form__content">
        <div className="form__card">
          <div className="form__input-name">
            <input
              {...register("full_name", {
                pattern: {
                  value: /^[A-Za-zА-Яа-яёЁ]+(\s[A-Za-zА-Яа-яёЁ]+)*$/,
                },
              })}
              placeholder="Ваше имя"
              className="form__input"
              name="full_name"
            />
          </div>
          <div className="form__input-phone">
            <input
              {...register("phone_number", {
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                },
              })}
              className="form__input"
              name="phone_number"
              placeholder="Ваш телефон"
            />
          </div>
        </div>
        <div className="form__select-card">
          <select className="form__select">
            <option value="service1" className="form__select-option">
              Услуга
            </option>
            <option value="service2" className="form__select-option">
              Орал
            </option>
            <option value="service3" className="form__select-option">
              Классика
            </option>
            <option value="service4" className="form__select-option">
              Анал
            </option>
          </select>
        </div>
      </nav>
      <div className="mobile-btn">
        <Slide direction="right" triggerOnce>
          <ButtonCommunicate
            text={"Отправить"}
            className={"basic"}
            type="submit"
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
