import { Box, Text } from "@chakra-ui/react";

export const TitleDisplay = () => {
    return (
        <Box ml="40%" mt="5%" maxW="400px" maxH="100px">
            <Text
                fontSize="6xl"
                fontWeight="bold"
                color="purple.400"
                fontStyle="italic"
            >
                Barter Bay
            </Text>
        </Box>
    );
};
