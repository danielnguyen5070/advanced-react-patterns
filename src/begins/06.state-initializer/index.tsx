import { Switch } from "../../shared/switch.tsx";
import { useToggle } from "./toggle.tsx";

export default function App() {
  const { on, getTogglerProps } = useToggle();
  const reset = () => {};
  return (
    <div>
      <Switch {...getTogglerProps({ on })} />
      <hr />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
