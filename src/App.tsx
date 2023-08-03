import { BrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.ts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
