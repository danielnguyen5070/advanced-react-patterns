import { Frown } from "lucide-react";
import { useToggle } from "../sport-detail-logic/toggleLogic.tsx";

export function EmptySportData() {
    const { on: enabled } = useToggle()!;
    return (
        <div className="flex flex-col items-center justify-center h-80 text-gray-500 space-y-4"
            style={{ display: enabled ? 'block' : 'none' }}
        >
            <Frown size={64} className="text-gray-400" />
            <h2 className="text-xl font-semibold">No Data Available</h2>
            <p className="text-sm text-center max-w-sm">
                It looks like we don’t have any sport data to show right now.
                Try selecting a different sport or adding some tricks.
            </p>
        </div>
    );
}
