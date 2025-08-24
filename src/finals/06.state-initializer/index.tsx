import { Switch } from "../../shared/switch.tsx";
import { useToggle } from "./toggle.tsx";

const initialState = { on: false };
export default function App() {
  const { on, reset, getTogglerProps } = useToggle({ initialState });
  return (
    <div>
      <Switch {...getTogglerProps({ on })} />
      <hr />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
