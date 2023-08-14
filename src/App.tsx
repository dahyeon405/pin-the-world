import { Outlet } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.ts";
import { ScrollToTop } from "@/components/ScrollToTop";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
