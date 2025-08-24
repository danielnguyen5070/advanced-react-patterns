import { createContext, useContext, useState } from "react";
import { Switch } from "../../shared/switch.tsx";

type ToggleTypes = {
  on: boolean;
  toggle: () => void;
};

const ToggleConetext = createContext<ToggleTypes | null>(null);

function useToggle() {
  const context = useContext(ToggleConetext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
}
export function Toggle({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return (
    <ToggleConetext value={{ on, toggle }}>
      <div className="flex flex-col items-center p-12">{children}</div>
    </ToggleConetext>
  );
}

export function ToggleOn({ children }: { children: React.ReactNode }) {
  const { on } = useToggle();
  return <>{on ? children : null}</>;
}

export function ToggleOff({ children }: { children: React.ReactNode }) {
  const { on } = useToggle();
  return <>{on ? null : children}</>;
}

type ToggleButtonProps = Omit<React.ComponentProps<typeof Switch>, "on"> & {
  on?: boolean;
};

export function ToggleButton(props: ToggleButtonProps) {
  const { on, toggle } = useToggle();
  return <Switch on={on} onClick={toggle} {...props} />;
}
