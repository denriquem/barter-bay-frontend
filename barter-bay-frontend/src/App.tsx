import { Box, ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <Box m="auto" width="20%"></Box>
        </ChakraProvider>
    );
}

export default App;
