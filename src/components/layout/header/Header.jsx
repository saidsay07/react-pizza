import React from "react";
import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoIcon from "/logo-icon.svg";
import { calcTotalPrice } from "../../../utils/calcTotalPrice.jsx";
import CartIcon from "/header-cart-icon.svg";

function Header() {
  const { isCart, cart } = useSelector((state) => state.pizzas);
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <div className={classes.box}>
        <Link to="/" className={classes.logo}>
          <img src={LogoIcon} alt="logo icon" />
          <div className={classes.logoInfo}>
            <p className={classes.title}>REACT PIZZA</p>
            <p className={classes.description}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </Link>
        {window.location.pathname === "/" ? (
          <Link to="/cart">
            <button className={isCart ? classes.cart : classes.cartActive}>
              <p className={classes.price}>{calcTotalPrice(cart)} ₽</p>
              <div className={classes.line}></div>
              <span>
                <img src={CartIcon} alt="shopping cart icon" />
                <p className={classes.count}>{cart.length}</p>
              </span>
            </button>
          </Link>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
