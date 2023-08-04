import { Outlet } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.ts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
