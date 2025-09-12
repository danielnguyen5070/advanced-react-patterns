
import { createContext, useContext } from "react";

type ToggleValue = { on: boolean, toggle: () => void };

export const ToggleContext = createContext<ToggleValue | null>(null);

export function useToggle() {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("useToggle must be used within a ToggleProvider");
    }
    return context;
}

