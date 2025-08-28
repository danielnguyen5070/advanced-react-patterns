
import { Details } from "./Details.tsx";
import { type SportData } from "../data/types.tsx";
import { List } from "./List.tsx";
import { useState } from "react";

export default function Main({
    sportList,
    selectedSport,
    setSelectedSport,
}: {
    sportList: Array<SportData>;
    selectedSport: SportData | null;
    setSelectedSport: (sport: SportData) => void;
}) {
    const [enabled, setEnabled] = useState(true);

    return (
        <main className="w-full mx-auto grid grid-cols-3 gap-6 mt-8 px-4">
            <div>
                <ToggleButton enabled={enabled} setEnabled={setEnabled} />
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 my-4 border border-gray-300 rounded"
                    />
                    <List sportList={sportList} setSelectedSport={setSelectedSport} />
                </div>
            </div>
            <div className="min-w-full col-span-2">
                <Details selectedSport={selectedSport} />
            </div>
        </main>
    );
}

function ToggleButton({ enabled, setEnabled }: { enabled: boolean, setEnabled: (value: boolean) => void }) {
    return (
        <button
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? "bg-blue-600" : "bg-gray-300"
                }`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? "translate-x-6" : "translate-x-1"
                    }`}
            />
        </button>
    );
}