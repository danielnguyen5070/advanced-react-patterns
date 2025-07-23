import { useId } from "react";
import { Input, Label } from "./slots.tsx";
import { TextField } from "./text-field.tsx";
import { Toggle, ToggleButton, Text } from "./toggle.tsx";

export default function App() {
  const partyModeId = useId();
  return (
    <div>
      <div>
        <Toggle>
          <label htmlFor={partyModeId}>Party mode</label>
          <ToggleButton id={partyModeId} />
          <Text slot="onText">Let's party 🥳</Text>
          <Text slot="offText">Sad town 😭</Text>
        </Toggle>
      </div>
      <hr />
      <div>
        <TextField>
          <Label>Venue</Label>
          <Input />
        </TextField>
      </div>
    </div>
  );
}
