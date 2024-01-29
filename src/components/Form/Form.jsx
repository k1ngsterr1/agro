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
          <div className="form__input-container">
            <input
              {...register("full_name", {
                required: "Заполните ваше имя",
                pattern: {
                  value: /^[A-Za-zА-Яа-яёЁ]+(\s[A-Za-zА-Яа-яёЁ]+)*$/,
                  message: "Пожалуйста введите ваше имя правильно",
                },
              })}
              placeholder="Ваше имя"
              className="form__input"
              name="full_name"
              isError={Boolean(errors.full_name)}
            />
            {errors.full_name && (
              <span className="form__input-error">
                {errors.full_name.message}
              </span>
            )}
          </div>
          <div className="form__input-container">
            <input
              {...register("phone_number", {
                required: "Заполните ваш телефон",
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Пожалуйста введите номер телефона правильно",
                },
              })}
              className="form__input"
              name="phone_number"
              placeholder="Ваш телефон"
              isError={Boolean(errors.phone_number)}
            />
            {errors.phone_number && (
              <p className="form__input-error">{errors.phone_number.message}</p>
            )}
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
        <div className="pc-btn">
          <Slide direction="right" triggerOnce>
            <ButtonMore
              text={"Отправить"}
              className={"basic-pc"}
              type="submit"
            />
          </Slide>
        </div>
      </div>
    </form>
  );
};

export default Form;
