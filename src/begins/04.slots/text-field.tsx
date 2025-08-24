import { useId } from "react";
import { SlotsContext } from "./slots-context";

export function TextField({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  const generatedId = useId();
  id ??= generatedId;

  const slots = { label: { htmlFor: id }, input: { id } };
  return (
    <SlotsContext.Provider value={slots}>
      <div className="flex flex-col items-start gap-2">{children}</div>
    </SlotsContext.Provider>
  );
}
