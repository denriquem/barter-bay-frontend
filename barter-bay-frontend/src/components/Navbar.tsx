import { Box, Button, Text } from "@chakra-ui/react";
import { useLocation, matchPath, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isItemPage = matchPath("/item/:userId", location.pathname);
    const handleBackButton = () => {
        navigate(-1);
    };

    return (
        <Box
            width="full"
            h={20}
            bgColor="pink.200"
            display="flex"
            flexDir="row"
        >
            <Box ml={8} mt={5}>
                {isItemPage ? (
                    <Button onClick={handleBackButton}>Back</Button>
                ) : (
                    <Text color="purple.600" fontWeight="bold" fontSize="xl">
                        Big NavBar
                    </Text>
                )}
            </Box>
            <Box
                display="flex"
                flexDir="row"
                justifyContent="flex-end"
                flex="1"
                mr={8}
                gap={2}
                mt={5}
            >
                <Text color="purple.600" fontWeight="bold" fontSize="xl">
                    Test1
                </Text>
                <Text color="purple.600" fontWeight="bold" fontSize="xl">
                    Test2
                </Text>
                <Text color="purple.600" fontWeight="bold" fontSize="xl">
                    Test3
                </Text>
            </Box>
        </Box>
    );
};
