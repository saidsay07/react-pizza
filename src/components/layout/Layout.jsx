import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header.jsx";
import Popup from "./popup/Popup.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Popup />
      <Outlet />
    </>
  );
}

export default Layout;
