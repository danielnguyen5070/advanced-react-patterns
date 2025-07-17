//import { useState } from "react";
import { Switch } from "../../shared/switch.tsx";
export function Toggle({ children }: { children: React.ReactNode }) {
  // const [on, setOn] = useState(false);
  //   const toggle = () => setOn(!on);

  return <div className="flex flex-col items-center p-12">{children}</div>;
}

export function ToggleOn({ children }: { children: React.ReactNode }) {
  const on = false;
  return <>{on ? children : null}</>;
}

export function ToggleOff({ children }: { children: React.ReactNode }) {
  const on = false;
  return <>{on ? null : children}</>;
}

type ToggleButtonProps = Omit<React.ComponentProps<typeof Switch>, "on"> & {
  on?: boolean;
};

export function ToggleButton(props: ToggleButtonProps) {
  const on = false;
  const toggle = () => {};
  return <Switch on={on} onClick={toggle} {...props} />;
}
