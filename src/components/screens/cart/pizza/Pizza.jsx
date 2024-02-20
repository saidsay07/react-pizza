import React from "react";
import classes from "./Pizza.module.scss";
import { useDispatch } from "react-redux";

import {
  decrementCount,
  incrementCount,
  removePizza,
} from "../../../../store/pizzaSlice.jsx";
import RemoveIcon from "/remove-icon.svg";
import DecrementIcon from "/decrement-icon.svg";
import IncrementIcon from "/increment-icon.svg";
function Pizza({ image, title, height, size, count, id, price }) {
  const dispatch = useDispatch();

  return (
    <div className={classes.product}>
      <div className={classes.left}>
        <img
          src={"./pizzas/" + (height === "тонкое" ? image[0] : image[1])}
          alt="product pictures"
        />
        <div>
          <p className={classes.name}>{title.slice(0, 8)}..</p>
          <p className={classes.info}>
            {height} тесто, {size} см.
          </p>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.countBox}>
          <button
            disabled={count <= 1 ? true : null}
            className={classes.decrement}
            onClick={() => dispatch(decrementCount({ id, height, size }))}
          >
            <img src={DecrementIcon} alt="icon" />
          </button>
          <p className={classes.count}>{count}</p>
          <button
            disabled={count >= 10 ? true : null}
            className={classes.increment}
            onClick={() => dispatch(incrementCount({ id, height, size }))}
          >
            <img src={IncrementIcon} alt="icon" />
          </button>
        </div>
        <p className={classes.price}>{price * count} ₽</p>
        <button
          className={classes.remove}
          onClick={() => dispatch(removePizza({ id, height, size }))}
        >
          <img src={RemoveIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default Pizza;
