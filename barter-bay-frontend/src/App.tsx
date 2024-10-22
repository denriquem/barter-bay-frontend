import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { PageWrapper } from "./components/PageWrapper";

function App() {
    return (
        <ChakraProvider>
            <PageWrapper>
                <Navbar />
            </PageWrapper>
        </ChakraProvider>
    );
}

export default App;
