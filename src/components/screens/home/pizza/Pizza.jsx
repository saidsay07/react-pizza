import React from "react";
import classes from "./Pizza.module.scss";
import { useDispatch } from "react-redux";

import {
  setHeight,
  setSize,
  addToCart,
  setPopup,
} from "../../../../store/pizzaSlice.jsx";

function Pizza({ image, title, id, height, size, price, pizza }) {
  const dispatch = useDispatch();

  function addPizza() {
    dispatch(addToCart({ pizza }));
    dispatch(setPopup({ title }));
    setTimeout(() => {
      dispatch(setPopup({ title }));
    }, 1500);
  }

  return (
    <div className={classes.pizza}>
      <div className={classes.imageBox}>
        <img
          src={"./pizzas/" + (height === "тонкое" ? image[0] : image[1])}
          alt="pizza picture"
          className={
            size === 26
              ? classes.imageSmall
              : size === 30
                ? classes.imageAverage
                : size === 40
                  ? classes.imageBig
                  : null
          }
        />
      </div>
      <p className={classes.title}>{title}</p>
      <div className={classes.dimensions}>
        <div className={classes.height}>
          <button
            onClick={() => dispatch(setHeight({ id, height: "тонкое" }))}
            className={
              height === "тонкое"
                ? classes.heightButtonActive
                : classes.heightButton
            }
          >
            тонкое
          </button>
          <button
            onClick={() => dispatch(setHeight({ id, height: "традиционное" }))}
            className={
              height === "традиционное"
                ? classes.heightButtonActive
                : classes.heightButton
            }
          >
            традиционное
          </button>
        </div>
        <div className={classes.size}>
          <button
            onClick={() => dispatch(setSize({ id, size: 26 }))}
            className={
              size === 26 ? classes.sizeButtonActive : classes.sizeButton
            }
          >
            26 см.
          </button>
          <button
            onClick={() => dispatch(setSize({ id, size: 30 }))}
            className={
              size === 30 ? classes.sizeButtonActive : classes.sizeButton
            }
          >
            30 см.
          </button>
          <button
            onClick={() => dispatch(setSize({ id, size: 40 }))}
            className={
              size === 40 ? classes.sizeButtonActive : classes.sizeButton
            }
          >
            40 см.
          </button>
        </div>
      </div>
      <div className={classes.other}>
        <p className={classes.price}>от {price} ₽</p>
        <a className={classes.cart} onClick={() => addPizza()}>
          <svg
            className={classes.cartSvg}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          Добавить
        </a>
      </div>
    </div>
  );
}

export default Pizza;
