import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    id: string;
    title: string;
    content: string;
    userHandle: string;
}

export const Card = ({ title, content, userHandle, id }: CardProps) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        console.log(id);
        console.log("hello");
        navigate("/item/id");
    };

    return (
        <Box
            maxW="2xl"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
            bg="blue.50"
            padding={6}
            onClick={handleItemClick}
        >
            <Box display="flex" flexDir="row" width="full">
                <Text fontSize="xl" fontWeight="bold" color="cyan.600">
                    {title}
                </Text>
                <Box justifyContent="flex-end" ml="auto">
                    <Text color="cyan.600" fontWeight="bold">
                        {userHandle}
                    </Text>
                </Box>
            </Box>
            <Text mt={4}>{content}</Text>
        </Box>
    );
};
