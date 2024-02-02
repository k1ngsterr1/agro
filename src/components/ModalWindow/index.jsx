import React from "react";
import ButtonCommunicate from "../Buttons/ButtonCommunicate/ButtonCommunicate";

import logo from "../../assets/logo.svg";

import "./styles.scss";
import { useDispatch } from "react-redux";
import { toggleOffModal } from "../../redux/modalSlice";
import { Slide } from "react-awesome-reveal";

export const ModalWindow = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleOffModal());
  };

  return (
    <>
      <div className="overlay" onClick={handleClose} />
      <div className="modal_window">
        <img src={logo} alt="logo" className="modal_window__logo" />
        <span className="modal_window__text">Спасибо за заявку!</span>
        <span className="modal_window__sub_text">
          Наши менеджеры свяжутся с вами в скором времени
        </span>
        <ButtonCommunicate
          text="Закрыть"
          className={"basic-pc"}
          onClick={handleClose}
        />
      </div>
    </>
  );
};
