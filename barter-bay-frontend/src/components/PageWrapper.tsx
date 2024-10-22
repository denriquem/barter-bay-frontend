import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import backgroundImage2 from "../assets/Background03.jpg";

interface PageWrapperProps {
    children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <Box
            minH="100vh"
            display="flex"
            flexDir="column"
            backgroundColor="pink.100"
            backgroundImage={backgroundImage2}
            bgSize="cover"
        >
            {children}
        </Box>
    );
};
