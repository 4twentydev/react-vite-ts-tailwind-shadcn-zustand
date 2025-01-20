import { useState, useEffect } from "react";

/**
 * Simplify API Calls 🌐 Fetching data is a common task in React.
 * The useFetch hook abstracts repetitive logic, streamlining
 * API calls and managing state elegantly.
 * @param url - The URL to fetch data from.
 * @returns The data, loading state, and error state.
 */

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;