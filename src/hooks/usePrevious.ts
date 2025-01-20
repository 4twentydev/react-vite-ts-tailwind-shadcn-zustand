import { useEffect, useRef } from "react";

/**
 * Track Previous State 🔄 Keep track of previous state values
 * with ease using this hook, which is particularly useful for
 * implementing undo/redo functionality or debugging.
 * @param value - The value to track.
 * @returns The previous value.
 */

function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>(undefined);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default usePrevious;