import React from "react";
import classes from "./Empty.module.scss";
import smileIcon from "/smile-icon.png";
import cartIcon from "/shopping-cart.svg";
import {Link} from "react-router-dom";

function Empty() {
  return (
    <section className={classes.empty}>
      <p className={classes.title}>
        Корзина пустая <img src={smileIcon} alt="icon" />
      </p>
      <p className={classes.subtitle}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartIcon} alt="shopping cart" className={classes.cartIcon} />
      <Link to="/">
        <button className={classes.back}>Вернуться назад</button>
      </Link>
    </section>
  );
}

export default Empty;
