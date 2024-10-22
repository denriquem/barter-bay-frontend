import { Box, Text } from "@chakra-ui/react";

interface CardProps {
    title: string;
    content: string;
}

export const Card = ({ title, content }: CardProps) => {
    return (
        <Box
            mt={"60px"}
            ml={"35%"}
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
            bg="blue.50"
            padding={6}
        >
            <Text fontSize="xl" fontWeight="bold">
                {title}
            </Text>
            <Text mt={4}>{content}</Text>
        </Box>
    );
};
