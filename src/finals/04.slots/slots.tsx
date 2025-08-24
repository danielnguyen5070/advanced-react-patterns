import { useSlots } from "./slots-context.tsx";
export function Label(props: React.ComponentProps<"label">) {
  props = useSlots(props, "label");
  return (
    <label
      className="block text-sm font-medium text-gray-700 mb-1"
      {...props}
    />
  );
}

export function Input(props: React.ComponentProps<"input">) {
  props = useSlots(props, "input");
  return (
    <input
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      {...props}
    />
  );
}
