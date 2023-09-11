import React from "react";
import Rotas from "./Page/Rotas/Rotas";
import GlobalStyle from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ChakraProvider>
    <GlobalStyle/>
        <Rotas/>
    </ChakraProvider>
    </>
  );
}

export default App;
