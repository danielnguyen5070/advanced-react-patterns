import { SportDataView } from "../data/SportDataView";
import { type SportData } from "../data/types.tsx";
import { EmptySportData } from "../data/EmptySportData";
import { ToggleProvider } from "../sport-detail-logic/ToggleProvider.tsx";
import { useToggle } from "../sport-detail-logic/toggleLogic.tsx";

export function Details({ selectedSport }: { selectedSport: SportData | null }) {
    return (
        <ToggleProvider>
            <ToggleButton />
            <div className="py-6 mt-4 bg-white rounded-lg shadow border border-gray-200 min-h-[200px] flex items-center justify-center w-full"
            >
                {selectedSport ? (
                    <SportDataView sport={selectedSport} />
                ) : (
                    <EmptySportData />
                )}
            </div>
        </ToggleProvider>
    );
}

function ToggleButton() {
    const { on: enabled, toggle: setEnabled } = useToggle()!;

    return (
        <button
            onClick={() => setEnabled()}
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
