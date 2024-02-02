import React from "react";
import ButtonCommunicate from "../Buttons/ButtonCommunicate/ButtonCommunicate";

import logo from "../../assets/logo.svg";

import "./styles.scss";
import { useDispatch } from "react-redux";
import { toggleOffModal } from "../../redux/modalSlice";

export const ModalWindow = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="overlay" onClick={dispatch(toggleOffModal)} />
      <div className="modal_window">
        <img src={logo} alt="logo" className="modal_window__logo" />
        <span className="modal_window__text">Спасибо за заявку!</span>
        <span className="modal_window__sub_text">
          Наши менеджеры свяжутся с вами в скором времени
        </span>
        <ButtonCommunicate
          text="Закрыть"
          className={"basic-pc"}
          onClick={dispatch(toggleOffModal)}
        />
      </div>
    </>
  );
};
