import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

const App = () => {
  return (
    <ChakraProvider theme={theme}>

      <Chat />

    </ChakraProvider>
  );
};

export default App;