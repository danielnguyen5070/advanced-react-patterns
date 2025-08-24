import { useState } from "react";
import { Switch } from "../../shared/switch.tsx";
import {
  toggleReducer,
  useToggle,
  type ToggleAction,
  type ToggleState,
} from "./toggle.tsx";

export default function App() {
  const [timesClicked, setTimesClicked] = useState(0);
  const clickedTooMuch = timesClicked >= 4;

  function customToggleReducer(state: ToggleState, action: ToggleAction) {
    if (timesClicked >= 4) return state;
    return toggleReducer(state, action);
  }

  const { on, getTogglerProps, getResetterProps } = useToggle({
    initialOn: false,
    defaultToggleReducer: customToggleReducer, // 🐨 pass the custom reducer here
  });

  return (
    <div>
      <Switch
        {...getTogglerProps({
          on: on,
          onClick: () => setTimesClicked((count) => count + 1),
        })}
      />
      {clickedTooMuch ? (
        <div data-testid="notice">
          Whoa, you clicked too much!
          <br />
        </div>
      ) : timesClicked > 0 ? (
        <div data-testid="click-count">Click count: {timesClicked}</div>
      ) : null}
      <button {...getResetterProps({ onClick: () => setTimesClicked(0) })}>
        Reset
      </button>
    </div>
  );
}
