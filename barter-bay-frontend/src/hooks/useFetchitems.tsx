import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Item } from "../types/mainTypes";

export const useFetchItems = () => {
    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/items"
                );
                setData(response.data);
            } catch (err) {
                const axiosError = err as AxiosError;
                if (axiosError) {
                    setError(axiosError.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, isLoading: loading, isError: error };
};
