import { createContext, use, useId, useState } from "react";
import { Switch } from "../../shared/switch.tsx";

type ToggleValue = Record<string, Record<string, unknown>>;
const ToggleContext = createContext<ToggleValue>({});

export function Toggle({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  const id = useId();

  const value = {
    label: { htmlFor: id },
    switch: { id, on, onClick: toggle },
    onText: { hidden: !on },
    offText: { hidden: on },
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
}

function useToggle<Props>(props: Props, slot: string): Props {
  const context = use(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return { ...props, slot, ...context[slot] } as Props;
}

export function Text({
  slot,
  ...props
}: { slot: string } & React.ComponentProps<"span">) {
  const spanProps = useToggle(props, slot);
  return <span {...spanProps} />;
}

type ToggleButtonProps = Omit<React.ComponentProps<typeof Switch>, "on"> & {
  on?: boolean;
};
export function ToggleButton({ ...props }: ToggleButtonProps) {
  const { id, on, onClick: toggle } = useToggle(props, "switch");
  return <Switch id={id} on={on ?? false} onClick={toggle} />;
}
