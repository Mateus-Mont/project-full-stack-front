import React from "react";
import { GlobalStyle } from "./globalStyle";
import { RoutesMain as Routes } from "./routes";
import { ModalProvider } from "./contexts/modais";
import { UserProvider } from "./contexts/user";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ModalProvider>
    </>
  );
}

export default App;
