
import SearchComp from "./SearchComp";
import { useSlot } from "../sport-data-logic/SlotUse";
import { SlotProvider } from "../sport-data-logic/SlotProvider";

export default function Main({
    list,
    content
}: {
    list: React.ReactNode;
    content: React.ReactNode;
}) {

    return (
        <main className="w-full mx-auto grid grid-cols-3 gap-6 mt-8 px-4">
            <SlotProvider>
                <div>
                    <ToggleButton />
                    <SearchComp list={list} />
                </div>
            </SlotProvider>

            <div className="min-w-full col-span-2">
                {content}
            </div>
        </main>
    );
}

function ToggleButton() {
    const { enabled, setEnabled } = useSlot("toggle") as {
        enabled: boolean;
        setEnabled: (value: boolean) => void;
    };

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
