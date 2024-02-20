import React from "react";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout.jsx";
import Home from "./components/screens/home/Home.jsx";
import Cart from "./components/screens/cart/Cart.jsx";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
