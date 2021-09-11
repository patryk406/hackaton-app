import Subscribers from "./pages/Subscribers";
import Campaigns from "./pages/Campaigns";
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  return (
    <ChakraProvider>
      <Subscribers />
      <Campaigns />
    </ChakraProvider>
  );
}

export default App;
