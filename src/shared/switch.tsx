import "./switch.styles.css";

export function Switch({
  on,
  className = "",
  "aria-label": ariaLabel,
  onClick,
  ...props
}: { on: boolean } & React.ComponentProps<"button">) {
  const btnClassName = [
    className,
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      role="switch"
      aria-label={ariaLabel ?? ("id" in props ? undefined : "Toggle")}
      aria-checked={on}
      onClick={onClick}
      className={btnClassName}
      {...props}
    />
  );
}
