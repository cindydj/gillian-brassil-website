import { useEffect } from 'react';

/**
 * Hook that alerts when there are clicks outside of the passed ref.
 */
export function useOutsideClickDetector(ref: any, callback: () => void) {
    useEffect(() => {
        function handleClickOutsideRef(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        // Start listening to outside clicks.
        document.addEventListener('mousedown', handleClickOutsideRef);
        return () => {
            // Unbind the event listener on clean up.
            document.removeEventListener('mousedown', handleClickOutsideRef);
        };
    }, [callback, ref]);
}
