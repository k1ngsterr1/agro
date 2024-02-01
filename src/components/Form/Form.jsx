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
              required
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
              required
              className="form__input"
              name="phone_number"
              placeholder="Ваш телефон"
            />
          </div>
        </div>
        <div className="form__select-card">
          <select className="form__select">
            <option value="Сопровождение" className="form__select-option">
              Сопровождение
            </option>
            <option value="Поиск" className="form__select-option">
              Поиск
            </option>
            <option value="Комплекс" className="form__select-option">
              Комплекс
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
