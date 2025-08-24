import { useReducer, useRef } from "react";

function callAll<Args extends Array<unknown>>(
  ...fns: Array<((...args: Args) => unknown) | undefined>
) {
  return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

export type ToggleState = { on: boolean };
export type ToggleAction =
  | { type: "toggle" }
  | { type: "reset"; initialState: ToggleState };

export function toggleReducer(state: ToggleState, action: ToggleAction) {
  switch (action.type) {
    case "toggle": {
      return { on: !state.on };
    }
    case "reset": {
      return action.initialState;
    }
  }
}

export function useToggle({
  on: controlledOn,
  onChange,
  initialOn = false,
  reducer = toggleReducer,
}: {
  initialOn?: boolean;
  reducer?: typeof toggleReducer;
  on?: boolean;
  onChange?: (state: ToggleState, action: ToggleAction) => void;
} = {}) {
  const { current: initialState } = useRef<ToggleState>({ on: initialOn });
  const [state, dispatch] = useReducer(reducer, initialState);
  const isControlled = controlledOn !== undefined;
  const on = isControlled ? controlledOn : state.on;

  function dispatchWithOnChange(action: ToggleAction) {
    if (isControlled) {
      onChange?.(reducer({ ...state, on }, action), action);
    }
    dispatch(action);
  }
  const toggle = () => dispatchWithOnChange({ type: "toggle" });
  const reset = () => dispatchWithOnChange({ type: "reset", initialState });

  function getTogglerProps<Props>({
    onClick,
    ...props
  }: { onClick?: React.ComponentProps<"button">["onClick"] } & Props) {
    return {
      "aria-checked": on,
      onClick: callAll(onClick, toggle),
      ...props,
    };
  }

  function getResetterProps<Props>({
    onClick,
    ...props
  }: { onClick?: React.ComponentProps<"button">["onClick"] } & Props) {
    return {
      onClick: callAll(onClick, reset),
      ...props,
    };
  }

  return {
    on,
    reset,
    toggle,
    getTogglerProps,
    getResetterProps,
  };
}
