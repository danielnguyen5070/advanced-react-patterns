import { Switch } from "../../shared/switch.tsx";
import { useToggle } from "./toggle.tsx";

export default function App() {
  const { on, getToggle } = useToggle();

  function log() {
    console.log("Button clicked");
  }

  return (
    <div>
      <Switch {...getToggle({ on })} />
      <hr />
      <button aria-label="custom-button" {...getToggle({ onClick: log })}>
        {on ? "on" : "off"}
      </button>
    </div>
  );
}
