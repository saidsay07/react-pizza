import React, { useState } from "react";
import classes from "./Sorting.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { setCategory, setSort } from "../../../../store/pizzaSlice.jsx";
import UpDownIcon from "/up-down-icon.svg";

function Sorting() {
  const dispatch = useDispatch();
  const { category, sort } = useSelector((state) => state.pizzas);
  const [upDown, setUpDown] = useState(false);

  function setUpDownFn(sort) {
    setUpDown(!upDown);
    dispatch(setSort({ sort }));
  }

  return (
    <section>
      <div className={classes.box}>
        <div className={classes.buttons}>
          <button
            onClick={() => dispatch(setCategory({ category: "все" }))}
            className={
              category === "все" ? classes.buttonActive : classes.button
            }
          >
            Все
          </button>
          <button
            onClick={() => dispatch(setCategory({ category: "мясные" }))}
            className={
              category === "мясные" ? classes.buttonActive : classes.button
            }
          >
            Мясные
          </button>
          <button
            onClick={() =>
              dispatch(setCategory({ category: "вегетарианские" }))
            }
            className={
              category === "вегетарианские"
                ? classes.buttonActive
                : classes.button
            }
          >
            Вегетарианские
          </button>
          <button
            onClick={() => dispatch(setCategory({ category: "гриль" }))}
            className={
              category === "гриль" ? classes.buttonActive : classes.button
            }
          >
            Гриль
          </button>
          <button
            onClick={() => dispatch(setCategory({ category: "острые" }))}
            className={
              category === "острые" ? classes.buttonActive : classes.button
            }
          >
            Острые
          </button>
        </div>
        <div className={classes.sort}>
          <div>
            <img
              className={upDown ? classes.imageActive : classes.image}
              src={UpDownIcon}
              alt="up down icon"
            />
            <p className={classes.text}>Сортировка по:</p>
            <p
              onClick={() => setUpDown(!upDown)}
              className={classes.linkDecoration}
            >
              {sort}
            </p>
          </div>
          <ul className={upDown ? classes.popupActive : classes.popup}>
            <li
              onClick={() => setUpDownFn("популярности")}
              className={
                sort === "популярности" ? classes.linkActive : classes.link
              }
            >
              Популярности
            </li>
            <li
              onClick={() => setUpDownFn("по цене")}
              className={sort === "по цене" ? classes.linkActive : classes.link}
            >
              По цене
            </li>
            <li
              onClick={() => setUpDownFn("по алфавиту")}
              className={
                sort === "по алфавиту" ? classes.linkActive : classes.link
              }
            >
              По алфавиту
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sorting;
