import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { css, ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { ModalProvider } from "./ModalReducer";
import * as ReactDOMClient from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ModalProvider>
  </React.StrictMode>
);
