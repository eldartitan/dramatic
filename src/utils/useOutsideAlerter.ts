import { useEffect, RefObject } from "react";

export default function useOutsideAlerter(
    refs: RefObject<HTMLElement>[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
): void {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent): void {
            const isOutside = refs.every(
                (ref) =>
                    ref.current && !ref.current.contains(event.target as Node)
            );
            if (isOutside) {
                setOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs, setOpen]);
}
