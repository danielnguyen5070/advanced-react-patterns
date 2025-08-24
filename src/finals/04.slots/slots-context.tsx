import { createContext, useContext } from "react";

type Slots = Record<string, Record<string, unknown>>;
export const SlotsContext = createContext<Slots>({});

export function useSlots<Props>(props: Props, slot: string): Props {
  const slots = useContext(SlotsContext);
  if (!slots[slot]) {
    return {} as Props;
  }
  return { ...props, slot, ...slots[slot] };
}
