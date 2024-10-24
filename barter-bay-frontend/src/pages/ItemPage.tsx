import { Box, Divider } from "@chakra-ui/react";
import { PageWrapper } from "../components/PageWrapper";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetItem } from "../hooks/useGetItem";
import { Navbar } from "../components/Navbar";

export const ItemPage = () => {
    const { id } = useParams();
    const stringIdParam = String(id);
    const { item, isLoading, isError } = useGetItem(stringIdParam);

    return (
        <PageWrapper>
            <Navbar />
            <Box my="auto">
                {isLoading && (
                    <Box mx={40} minH="400px">
                        ...Loading
                    </Box>
                )}
                {isError && (
                    <Box color="red.500">Error loading items: {isError}</Box>
                )}
                {item && (
                    <Card mx={40} minH="400px">
                        <CardHeader
                            color="cyan.600"
                            fontWeight="bold"
                            fontSize="2xl"
                        >
                            {item.title}
                        </CardHeader>
                        <Divider />
                        <CardBody>{item.description} </CardBody>
                        <Divider />
                        <CardFooter>{item.ownerId}</CardFooter>
                    </Card>
                )}
            </Box>
        </PageWrapper>
    );
};
