import { type SportData } from "../data/types.tsx";

export function SportDataView({ sport }: { sport: SportData }) {
    return (
        <div className="space-y-6">
            {/* Image */}
            <div className="w-full flex justify-center h-80">
                <img
                    src={sport.image}
                    alt={sport.name}
                    className="object-contain rounded-lg w-3/4"
                />
            </div>

            {/* Sport Name */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    {sport.name}
                </h2>
            </section>

            {/* Tricks List */}
            <section>
                <ul className="space-y-2 flex flex-col items-center">
                    {sport.tricks.map((trick) => (
                        <li
                            key={trick.name}
                            className="bg-gray-100 flex justify-between items-center max-w-64"
                        >
                            <span className="text-gray-800 font-medium">{trick.name}:</span>
                            <span className="text-sm text-gray-600 ml-1">
                                {trick.points}{" "}
                                <small className="text-xs text-gray-500">({trick.type})</small>
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
