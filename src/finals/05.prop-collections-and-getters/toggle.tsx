import { useState } from "react";

function callAll<Args extends Array<unknown>>(
  ...fns: Array<((...args: Args) => unknown) | undefined>
) {
  return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

export function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  function getToggle<Props>({
    onClick,
    ...props
  }: { onClick?: () => void } & Props) {
    return {
      "aria-pressed": on,
      onClick: callAll(onClick, toggle),
      ...props,
    };
  }

  return {
    on,
    toggle,
    getToggle,
  };
}
