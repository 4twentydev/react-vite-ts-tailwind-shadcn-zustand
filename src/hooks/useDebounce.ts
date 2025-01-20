import { useState, useEffect } from "react";

/**
 * Optimize Performance ⏳ Handling frequent user input, such as search or form fields,
 * is made efficient with a debounce hook, reducing unnecessary renders and API calls.
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds.
 * @returns The debounced value.
 */

/**
 * Usage:
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearch = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   if (debouncedSearch) {
 *     // Trigger API or other actions
 *   }
 * }, [debouncedSearch]);
 */

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;