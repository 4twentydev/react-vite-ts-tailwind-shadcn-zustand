import { useState, useEffect } from "react";

/**
 * Check Media Query 📱 Easily check if a media query matches
 * with this hook, which is useful for implementing responsive
 * designs or conditional rendering based on screen size.
 * @param query - The media query to check.
 * @returns Whether the media query matches.
 */

/**
 * Usage:
 * const isMobile = useMediaQuery('(max-width: 768px)');
 *
 * return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
 */

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const updateMatch = () => setMatches(mediaQueryList.matches);
        updateMatch();

        mediaQueryList.addEventListener('change', updateMatch);
        return () => mediaQueryList.removeEventListener('change', updateMatch);
    }, [query]);

    return matches;
}

export default useMediaQuery;