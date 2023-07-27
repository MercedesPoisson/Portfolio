import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ColorProvider } from "./components/ColorContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./Translations/es/global_es.json";
import global_en from "./Translations/en/global_en.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  }
});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ColorProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </ColorProvider>
    </React.StrictMode>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);
