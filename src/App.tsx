import React from "react";
import { GlobalStyle } from "./globalStyle";
import { RoutesMain as Routes } from "./routes";
import { ModalProvider } from "./contexts/modais";

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </>
  );
}

export default App;
