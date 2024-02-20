import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index.jsx";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
