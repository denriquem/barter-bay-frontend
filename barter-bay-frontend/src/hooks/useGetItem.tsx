import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Item } from "../types/mainTypes";

export const useGetItem = (itemId: string) => {
    const [item, setItem] = useState<Item>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const getItem = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/item/${itemId}`
                );
                setItem(response.data);
            } catch (err) {
                const axiosError = err as AxiosError;
                if (axiosError) {
                    setError(axiosError.message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        getItem();
    }, [itemId, error]);

    return { item, isLoading, isError: error };
};
