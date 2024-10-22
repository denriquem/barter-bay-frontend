import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { PageWrapper } from "./components/PageWrapper";
import { TitleDisplay } from "./components/TitleDisplay";
import { Card } from "./components/Card";

function App() {
    return (
        <ChakraProvider>
            <PageWrapper>
                <Navbar />
                <TitleDisplay />
                <Card
                    title={"Test card"}
                    content={"Test card business bla bla"}
                />
            </PageWrapper>
        </ChakraProvider>
    );
}

export default App;
