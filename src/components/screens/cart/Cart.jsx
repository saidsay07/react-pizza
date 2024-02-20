import React from "react";
import classes from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "react-router-dom";

import Empty from "./empty/Empty.jsx";
import cartIcon from "/cart-icon.svg";
import { clearCart } from "../../../store/pizzaSlice.jsx";
import clearIcon from "/clear-icon.svg";
import Pizza from "./pizza/Pizza.jsx";
import { calcTotalPrice } from "../../../utils/calcTotalPrice.jsx";
import backIcon from "/back-icon.svg";

function Cart() {
  const { cart, pizzas } = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <main>
      <section className={classes.cart}>
        <div className={classes.box} ref={parent}>
          {cart.length === 0 ? (
            <Empty />
          ) : (
            <>
              <div className={classes.row}>
                <div className={classes.rowLeft}>
                  <img
                    src={cartIcon}
                    alt="icon cart"
                    className={classes.cartIcon}
                  />
                  <p className={classes.title}>Корзина</p>
                </div>
                <button
                  className={classes.rowRight}
                  onClick={() => dispatch(clearCart())}
                >
                  <img
                    src={clearIcon}
                    alt="clear icon"
                    className={classes.clearIcon}
                  />
                  <p className={classes.clearTitle}>Очистить корзину</p>
                </button>
              </div>
              <div className={classes.cards} ref={parent}>
                {cart.map((pizza, index) => {
                  return <Pizza key={index} {...pizza} />;
                })}
              </div>
              <div className={classes.row}>
                <p className={classes.count}>
                  Всего пицц: <b>{cart.length} шт.</b>
                </p>
                <p className={classes.totalPrice} ref={parent}>
                  Сумма заказа: <b>{calcTotalPrice(cart)} ₽</b>
                </p>
              </div>
              <div className={classes.row}>
                <Link to="/">
                  <button className={classes.back}>
                    <img src={backIcon} alt="back icon" />
                    Вернуться назад
                  </button>
                </Link>
                <Link to="/" onClick={() => dispatch(clearCart())}>
                  <button className={classes.buy}>Оплатить сейчас</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Cart;
