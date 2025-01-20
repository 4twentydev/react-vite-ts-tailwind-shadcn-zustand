import { useEffect, useRef } from "react";

/**
 * Detect Click Outside 🔄 Easily detect clicks outside of a specific element
 * with this hook, which is useful for implementing dropdowns, modals, or tooltips.
 * @param handler - The function to call when a click outside is detected.
 * @returns A ref to the element to detect clicks outside of.
 */

/**
 * Usage:
 * const ref = useClickOutside(() => setDropdownOpen(false));
 *
 * return (
 *   <div ref={ref}>
 *     {dropdownOpen && <p>Dropdown Content</p>}
 *   </div>
 * );
 */

function useClickOutside(handler: () => void) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handler]);

    return ref;
}

export default useClickOutside;