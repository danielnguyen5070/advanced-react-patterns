import React from "react";

export type SlotsType = Record<string, Record<string, unknown>>;
export const SlotsContext = React.createContext<SlotsType | null>(null);

export function useSlots(slot: string) {
    const context = React.useContext(SlotsContext);
    if (!context) {
        throw new Error("useSlots must be used within a SlotsProvider");
    }
    return { ...context[slot] };
}
