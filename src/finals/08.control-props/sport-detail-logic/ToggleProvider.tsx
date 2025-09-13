import { useState } from "react";
import { ToggleContext } from "./toggleLogic.tsx";

export function ToggleProvider({ children }: { children: React.ReactNode }) {
    const [on, setOn] = useState(true);
    const toggle = () => setOn(!on);
    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}