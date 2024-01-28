import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

function App() {
  const handleClick = async () => {
    const response = await axios.get("http://localhost:3333/getNames");
    console.log("response: ", response.data);
  };
  return (
    <ChakraProvider>
      <Box>Hello Chakra</Box>
      <Button colorScheme="purple" onClick={handleClick}>
        Click me
      </Button>
    </ChakraProvider>
  );
}
export default App;
