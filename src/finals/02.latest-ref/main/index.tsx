
import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react"

function useDebounce<F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, waitFor: number) {
    const lastedFunc = useRef(func);

    useEffect(() => {
        lastedFunc.current = func;
    }, [func]);

    return useMemo(() => {
        return debounce((...args) => lastedFunc.current(...args), waitFor);
    }, [waitFor]);
}

export default function Main({
    list,
    content
}: {
    list: React.ReactNode;
    content: React.ReactNode;
}) {
    const [enabled, setEnabled] = useState(true);
    const [query, setQuery] = useState("");

    const handleSearchClick = () => {
        console.log("Search clicked with query:", query);
    };
    const debouncedSearch = useDebounce(handleSearchClick, 3000);

    return (
        <main className="w-full mx-auto grid grid-cols-3 gap-6 mt-8 px-4">
            <div>
                <ToggleButton enabled={enabled} setEnabled={setEnabled} />
                <div className={`${enabled ? "block" : "hidden"}`}>
                    <div className="relative w-full my-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                            onClick={debouncedSearch} />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {list}
                </div>
            </div>
            <div className="min-w-full col-span-2">
                {content}
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

function debounce<F extends (...args: Parameters<F>) => void>(func: F, waitFor: number) {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: Parameters<F>): void => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), waitFor);
    }
}