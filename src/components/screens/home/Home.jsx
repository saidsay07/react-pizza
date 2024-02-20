import React from "react";
import classes from "./Home.module.scss";

import Sorting from "./sorting/Sorting.jsx";
import Pizzas from "./pizzas/Pizzas.jsx";

function Home() {
  return (
    <main className={classes.home}>
      <Sorting />
      <Pizzas />
    </main>
  );
}

export default Home;
