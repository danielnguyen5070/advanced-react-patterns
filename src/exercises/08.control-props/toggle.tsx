import { Switch } from "../../shared/switch.tsx";
import { useToggle, type ToggleAction, type ToggleState } from "./reducer.tsx";

export function Toggle({
  on: controlledOn,
  onChange,
}: {
  on?: boolean;
  onChange?: (state: ToggleState, action: ToggleAction) => void;
}) {
  const { on, getTogglerProps } = useToggle({ on: controlledOn, onChange });
  const props = getTogglerProps({ on });
  return <Switch {...props} />;
}
