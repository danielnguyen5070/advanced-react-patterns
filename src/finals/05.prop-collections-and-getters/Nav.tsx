
import { useState } from "react";

export function Nav({ avatar, theme, setTheme }: { avatar: React.ReactNode, theme: boolean, setTheme: (theme: boolean) => void }) {
    const { getDropdownValue } = useDropdown({ options: ["Football", "Basketball", "Tennis", "Cricket"] });

    function handleClick(value: string) {
        console.log("Selected sport:", value);
    }

    return (
        <nav
            className="flex justify-between items-center bg-white text-white p-4"
            style={{ backgroundColor: "var(--accent-color)" }}
        >
            <ul className="flex gap-4 text-sm font-medium ">
                <li>
                    <a href="#/home" className="hover:text-blue-600">
                        <div
                            className="w-10 h-10 overflow-hidden"
                        >
                            {avatar}
                        </div>
                    </a>
                </li>
                <li className="items-center flex">
                    <Dropdown {...getDropdownValue({ onClick: handleClick })} />
                </li>
                <li className="items-center flex">
                    <a href="#/contact" className="hover:text-blue-600">
                        Contact
                    </a>
                </li>
            </ul>
            <ToggleButton enabled={theme} setEnabled={setTheme} />
        </nav>
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

function callAll<Args extends unknown[]>(...fns: Array<((...args: Args) => void) | undefined>) {
    return (...args: Args) => fns.forEach(fn => fn && fn(...args));
}

function useDropdown({ options }: { options: Array<string> }) {
    const [selected, setSelected] = useState("");
    const opts = options.map((item, index) => ({ id: index.toString(), value: item }));

    function getDropdownValue<Props>({ onClick, ...props }: { onClick: (value: string) => void } & Props) {
        return {
            selected,
            options: opts,
            setSelected: callAll(setSelected, onClick),
            ...props
        }
    }

    return {
        selected,
        setSelected,
        options: opts,
        getDropdownValue
    }
}

type DropDownType = {
    id: string;
    value: string;
}

function Dropdown({ options, selected, setSelected }: { options: Array<DropDownType>, selected: string, setSelected: (value: string) => void }) {
    return (
        <div className="">
            <select
                id="fruits"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                {options.map((item) => (
                    <option key={item.id} value={item.value}>
                        {item.value}
                    </option>
                ))}
            </select>
        </div>
    );
}
