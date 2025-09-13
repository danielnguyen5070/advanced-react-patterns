import { SlotsContext } from "./slotsLogic";
import { useState, useId } from "react";

export const SlotsProvider = ({ children }: { children: React.ReactNode }) => {
    const [enabled, setEnabled] = useState(true);
    const [query, setQuery] = useState("");
    const handleSearchClick = () => {
        console.log("Search clicked with query:", query);
    };
    const id = useId();

    const slots = {
        toggle: { enabled, setEnabled, handleSearchClick },
        search: { query, setQuery },
        label: { id }
    };

    return <SlotsContext.Provider value={slots}>{children}</SlotsContext.Provider>;
};