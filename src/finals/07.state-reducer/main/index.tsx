
import { SlotsProvider } from "../sport-data-logic/SlotsProvider";
import { SearchComp } from "./SearchComp";
import { useSlots } from "../sport-data-logic/slotsLogic";

export default function Main({
    list,
    content
}: {
    list: React.ReactNode;
    content: React.ReactNode;
}) {
    return (
        <SlotsProvider>
            <main className="w-full mx-auto grid grid-cols-3 gap-6 mt-8 px-4">
                <div>
                    <ToggleButton />
                    <SearchComp list={list} />
                </div>
                <div className="min-w-full col-span-2">
                    {content}
                </div>
            </main>
        </SlotsProvider>

    );
}

function ToggleButton() {
    const { enabled, setEnabled } = useSlots("toggle");
    return (
        <button
            onClick={() => (setEnabled as (on: boolean) => void)(!enabled)}
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