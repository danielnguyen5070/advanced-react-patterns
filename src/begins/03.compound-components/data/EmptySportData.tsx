import { Frown } from "lucide-react";

export function EmptySportData() {
    return (
        <div className="flex flex-col items-center justify-center h-80 text-gray-500 space-y-4">
            <Frown size={64} className="text-gray-400" />
            <h2 className="text-xl font-semibold">No Data Available</h2>
            <p className="text-sm text-center max-w-sm">
                It looks like we don’t have any sport data to show right now.
                Try selecting a different sport or adding some tricks.
            </p>
        </div>
    );
}
