import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { PageWrapper } from "./components/PageWrapper";
import { TitleDisplay } from "./components/TitleDisplay";
import { Items } from "./components/Items";

function App() {
    return (
        <ChakraProvider>
            <PageWrapper>
                <Navbar />
                <TitleDisplay />
                <Items />
            </PageWrapper>
        </ChakraProvider>
    );
}

export default App;
