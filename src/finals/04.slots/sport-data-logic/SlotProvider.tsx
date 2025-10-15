import React, { useId, useState } from "react";
import { SlotContext } from "./SlotUse";

export function SlotProvider({ children }: { children: React.ReactNode; }) {
    const [query, setQuery] = useState("");
    const [enabled, setEnabled] = useState(true);
    const id = useId();
    const handleSearchClick = () => {
        console.log("Search clicked with query:", query);
    };

    const slots = {
        search: {
            query,
            setQuery,
            handleSearchClick
        },
        toggle: {
            enabled,
            setEnabled
        },
        label: { htmlFor: id },
        input: { id },
    };

    return (
        <SlotContext.Provider value={slots}>
            {children}
        </SlotContext.Provider>
    );
}
