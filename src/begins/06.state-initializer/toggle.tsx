import { useReducer } from "react";

function callAll<Args extends Array<unknown>>(
  ...fns: Array<((...args: Args) => unknown) | undefined>
) {
  return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

type ToggleState = { on: boolean };
type ToggleAction = { type: "toggle" };

function toggleReducer(state: ToggleState, action: ToggleAction) {
  switch (action.type) {
    case "toggle": {
      return { on: !state.on };
    }
  }
}

export function useToggle() {
  const initialState = { on: false };
  const [state, dispatch] = useReducer(toggleReducer, initialState);
  const { on } = state;

  const toggle = () => dispatch({ type: "toggle" });

  function getTogglerProps<Props>({
    onClick,
    ...props
  }: {
    onClick?: React.ComponentProps<"button">["onClick"];
  } & Props) {
    return {
      "aria-checked": on,
      onClick: callAll(onClick, toggle),
      ...props,
    };
  }

  return {
    on,
    toggle,
    getTogglerProps,
  };
}
