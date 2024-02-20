import React from "react";
import classes from "./Pizzas.module.scss";
import { useSelector } from "react-redux";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter.jsx";
import Pizza from "../pizza/Pizza.jsx";

function Pizzas() {
  const { pizzas, category, sort } = useSelector((state) => state.pizzas);
  const filterPizzas = pizzas
    .filter((pizza) => {
      return pizza.category.includes(category);
    })
    .sort((a, b) => {
      if (sort === "популярности") {
        return a.rating - b.rating;
      }
      if (sort === "по алфавиту") {
        return a.title.localeCompare(b.title);
      }
      if (sort === "по цене") {
        return a.price - b.price;
      }
    });
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <section>
      <div className={classes.box}>
        <p className={classes.title}>{capitalizeFirstLetter(category)} пиццы</p>
        <div className={classes.cards} ref={parent}>
          {filterPizzas.map((pizza) => {
            return <Pizza key={pizza.id} {...pizza} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Pizzas;
