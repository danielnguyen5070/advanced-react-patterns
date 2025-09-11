import { type SportData } from "../data/types.tsx";

export function SportListItemButton({
    sport,
    onClick,
}: {
    sport: SportData;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            aria-label={sport.name}
            style={{
                ["--accent-color" as keyof React.CSSProperties]: sport.color,
                backgroundColor: "var(--accent-color)",
            }}
            className="flex items-center p-4 bg-gray-200 rounded-lg  hover:bg-gray-100 transition border-gray-200 w-full text-left"
        >
            <img
                src={sport.image}
                alt={sport.name}
                className="w-16 h-16 object-contain mr-4"
            />
            <div>
                <strong className="text-lg text-white">{sport.name}</strong>
            </div>
        </button>
    );
}
