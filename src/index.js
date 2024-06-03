// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css"; // Import your global styles
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
const customTheme = {
  fontFamily: 'Playfair Display, serif',
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      
        <React.StrictMode>
        <Theme>
            <div style={customTheme}>
              <App />
              <ToastContainer />
            </div>
            
          </Theme>
        </React.StrictMode>
    </PersistGate>
  </Provider>
);
reportWebVitals();
