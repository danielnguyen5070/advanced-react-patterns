import { type SportData } from "../data/types.tsx";
import { useToggle } from "../sport-detail-logic/toggleLogic.tsx";
import React from "react";

export function SportDataView({ sport }: { sport: SportData }) {
    const { on: enabled } = useToggle()!;

    const [defaultTricks, setDefaultTricks] = React.useState(true);
    const [showTricks, setShowTricks] = React.useState<boolean>(defaultTricks);

    function resetShowtricks() {
        setShowTricks(defaultTricks);
    }
    return (
        <div className="space-y-6"
            style={{ display: enabled ? 'block' : 'none' }}>
            {/* Image */}
            <div className="w-full flex justify-center h-80">
                <img
                    src={sport.image}
                    alt={sport.name}
                    className="object-contain rounded-lg w-3/4"
                />
            </div>

            <div className="flex space-x-12 items-start">
                <div className="flex flex-col">
                    <button className="flex items-left"
                        onClick={() => setDefaultTricks(!defaultTricks)}
                    >{defaultTricks.toString()}</button>
                    <div className="items-center space-x-2 justify-center flex">
                        <input checked={showTricks} type="checkbox" id="toggleTricks" className="w-4 h-4" onClick={() => setShowTricks(!showTricks)} />
                        <label htmlFor="toggleTricks" className="cursor-pointer text-blue-600 underline">Show/Hide Tricks</label>
                    </div>
                    <button onClick={resetShowtricks} className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition" >Reset</button>
                </div>
                <div className={`${showTricks ? "block" : "hidden"}`}>
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
            </div>
        </div>
    );
}
