import { Search } from "lucide-react"
import { useSlots } from "../sport-data-logic/slotsLogic";
import { useEffect, useMemo, useRef } from "react";

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

export const SearchComp = ({ list }: { list: React.ReactNode }) => {
    const { enabled, handleSearchClick } = useSlots("toggle");
    const { query, setQuery } = useSlots("search");
    const { id } = useSlots("label");
    const debouncedSearch = useDebounce(handleSearchClick as () => void, 3000);

    return <div className={`${enabled ? "block" : "hidden"}`}>
        <div className="relative w-full my-4">
            <label htmlFor={id as string} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer">
                <Search
                    onClick={debouncedSearch}
                />
            </label>
            <input
                id={id as string}
                type="text"
                placeholder="Search..."
                value={query as string}
                onChange={(e) => (setQuery as (value: string) => void)(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        {list}
    </div>
}
