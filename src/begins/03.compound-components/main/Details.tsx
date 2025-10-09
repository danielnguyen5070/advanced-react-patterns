import { SportDataView } from "../data/SportDataView";
import { type SportData } from "../data/types.tsx";
import { useState } from "react";
import { EmptySportData } from "../data/EmptySportData";

export function Details({ selectedSport }: { selectedSport: SportData | null }) {
    const [enabled, setEnabled] = useState(true);

    return (
        <div>
            <ToggleButton enabled={enabled} setEnabled={setEnabled} />
            <div className="py-6 mt-4 bg-white rounded-lg shadow border border-gray-200 min-h-[200px] flex items-center justify-center w-full"
                style={{
                    display: enabled ? 'block' : 'none'
                }}
            >
                {selectedSport ? (
                    <SportDataView sport={selectedSport} />
                ) : (
                    <EmptySportData />
                )}
            </div>
        </div>
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
