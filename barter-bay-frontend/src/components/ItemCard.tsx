import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    id: string;
    title: string;
    content: string;
    userHandle: string;
}

export const Card = ({ title, content, userHandle, id }: CardProps) => {
    const [showNewComment, setShowNewComment] = useState(false);
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/item/${id}`);
    };

    const handleAddCommentClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowNewComment(true);
    };

    const handleCancelComment = () => {
        setShowNewComment(false);
    };

    return (
        <>
            <Box
                maxW="2xl"
                borderWidth="1px"
                borderRadius="2xl"
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
                <Box
                    display="flex"
                    flexDir="row"
                    width="full"
                    justifyContent="end"
                    alignItems="center"
                >
                    {!showNewComment && (
                        <Button size="sm" onClick={handleAddCommentClick}>
                            Add Comment
                        </Button>
                    )}
                </Box>
            </Box>
            {showNewComment && (
                <Box
                    maxW="2xl"
                    borderWidth="1px"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                    bg="blue.100"
                    padding={6}
                >
                    <Textarea size="lg" bg="white" />
                    <Box display="flex" flexDir="row" mt={4} gap={2}>
                        <Button size="sm" onClick={handleCancelComment}>
                            Cancel
                        </Button>
                        <Button size="sm">Send</Button>
                    </Box>
                </Box>
            )}
        </>
    );
};
