import React, { useReducer } from "react";

function callAll<Args extends Array<unknown>>(
  ...fns: Array<((...args: Args) => unknown) | undefined>
) {
  return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

export type ToggleState = { on: boolean };
type ToggleAction =
  | { type: "toggle" }
  | { type: "reset"; initialState: ToggleState };

function toggleReducer(state: ToggleState, action: ToggleAction) {
  switch (action.type) {
    case "toggle": {
      return { on: !state.on };
    }
    case "reset": {
      return action.initialState;
    }
  }
}

export function useToggle({ initialState }: { initialState: ToggleState }) {
  const initRef = React.useRef(initialState);
  const [state, dispatch] = useReducer(toggleReducer, initRef.current);
  const { on } = state;

  const toggle = () => dispatch({ type: "toggle" });

  function reset() {
    dispatch({ type: "reset", initialState: initRef.current });
  }
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
    reset,
    getTogglerProps,
  };
}
