import React from "react";
import classes from "./Popup.module.scss";
import { useSelector } from "react-redux";

function Popup() {
  const { isPopup, contentPopup } = useSelector((state) => state.pizzas);

  return (
    <div className={isPopup ? classes.popupActive : classes.popup}>
      <p className={classes.title}>
        Добавдлено: <b>{contentPopup}</b>
      </p>
    </div>
  );
}

export default Popup;
