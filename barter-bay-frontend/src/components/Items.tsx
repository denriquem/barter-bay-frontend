import { Box, Heading, Stack } from "@chakra-ui/react";
import { Card } from "./ItemCard";
import { useFetchItems } from "../hooks/useFetchitems";

export const Items = () => {
    const { data: items, isLoading, isError } = useFetchItems();

    return (
        <Stack ml="30%" mt="2%" gap={4} mr="10%" py={8} cursor="pointer">
            <Heading mb={5} color="cyan.600">
                Items
            </Heading>
            {isLoading && <Box>...Loading</Box>}
            {isError && (
                <Box color="red.500">Error loading items: {isError}</Box>
            )}
            {items.map((item: any) => {
                return (
                    <Card
                        id={item.id}
                        key={item.title}
                        title={item.title}
                        content={item.description}
                        userHandle={item.ownerId}
                    />
                );
            })}
        </Stack>
    );
};
