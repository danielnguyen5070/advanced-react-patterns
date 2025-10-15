import React from "react";

type SlotType = Record<string, Record<string, unknown>>;
export const SlotContext = React.createContext<SlotType>({});

export function useSlot(slotName: string) {
    const context = React.useContext(SlotContext);
    if (!context) {
        throw new Error("useSlot must be used within a SlotProvider");
    }
    return { ...context[slotName] };
}