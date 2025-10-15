import { useEffect, useMemo, useRef } from "react";
import { Search } from "lucide-react"
import { useSlot } from "../sport-data-logic/SlotUse";
function SearchComp({ list }: { list: React.ReactNode; }) {
    const { query, setQuery, handleSearchClick } = useSlot("search") as {
        query: string;
        setQuery: (value: string) => void;
        handleSearchClick: () => void;
    };

    const { enabled } = useSlot("toggle") as {
        enabled: boolean;
    };
    const labelProps = useSlot("label")
    const inputProps = useSlot("input")

    const debouncedSearch = useDebounce(handleSearchClick, 3000);

    return <div className={`${enabled ? "block" : "hidden"}`}>
        <label className="block text-sm font-medium text-gray-700"
            {...labelProps}
        >Search</label>
        <div className="relative w-full my-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
                onClick={debouncedSearch} />
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...inputProps}
            />
        </div>
        {list}
    </div>
}

function useDebounce<F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, waitFor: number) {
    const lastedFunc = useRef(func);

    useEffect(() => {
        lastedFunc.current = func;
    }, [func]);

    return useMemo(() => {
        return debounce((...args) => lastedFunc.current(...args), waitFor);
    }, [waitFor]);
}

function debounce<F extends (...args: Parameters<F>) => void>(func: F, waitFor: number) {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: Parameters<F>): void => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), waitFor);
    }
}

export default SearchComp;