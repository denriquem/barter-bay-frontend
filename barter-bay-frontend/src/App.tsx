import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ItemPage } from "./pages/ItemPage";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/item/:id" element={<ItemPage />}></Route>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
