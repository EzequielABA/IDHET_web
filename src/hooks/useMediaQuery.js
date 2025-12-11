// Custom Hook: Media Query
import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
    const getMatch = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);
    const [matches, setMatches] = useState(getMatch);

    useEffect(() => {
        const media = window.matchMedia(query);

        const listener = (e) => setMatches(e.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

// Predefined breakpoint hooks
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');

export default useMediaQuery;
