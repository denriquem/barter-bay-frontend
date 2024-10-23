import { Box, Heading, Stack } from "@chakra-ui/react";
import { Card } from "./Card";
import { useFetchItems } from "../hooks/useFetchitems";

export const Items = () => {
    const { data: items, isLoading, isError } = useFetchItems();

    console.log(items);

    return (
        <Stack ml="30%" mt="2%" gap={4} mr="10%" py={8}>
            <Heading mb={5} color="cyan.600">
                Items
            </Heading>
            {isLoading && <Box>...Loading</Box>}
            {isError && <Box>Error loading items: {isError}</Box>}
            {items.map((item: any) => {
                return (
                    <Card
                        key={item.title}
                        title={item.title}
                        content={item.description}
                    />
                );
            })}
        </Stack>
    );
};
