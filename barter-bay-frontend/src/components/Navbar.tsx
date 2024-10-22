import { Box } from "@chakra-ui/react";

export const Navbar = () => {
    return (
        <Box
            width="full"
            h={20}
            bgColor="pink.200"
            display="flex"
            flexDir="row"
        >
            <Box ml={8} mt={3}>
                Big NavBar Mate
            </Box>
            <Box
                display="flex"
                flexDir="row"
                justifyContent="flex-end"
                flex="1"
                mr={8}
                gap={2}
                mt={3}
            >
                <Box>test1</Box>
                <Box>test2</Box>
                <Box>test3</Box>
            </Box>
        </Box>
    );
};
