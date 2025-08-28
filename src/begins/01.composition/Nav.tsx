
import { useState } from "react";
import { type User } from "./data/types";

export function Nav({ user }: { user: User }) {
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
                            <img
                                src={user.image}
                                alt={`${user.name} profile`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </a>
                </li>
                <li className="items-center flex">
                    <Dropdown />
                </li>
                <li className="items-center flex">
                    <a href="#/contact" className="hover:text-blue-600">
                        Contact
                    </a>
                </li>
            </ul>
            <ToggleButton />
        </nav>
    );
}

function ToggleButton() {
    const [enabled, setEnabled] = useState(false);

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

function Dropdown() {
    const [selected, setSelected] = useState("");

    const options = ["News", "Event", "Community"];

    return (
        <div className="">
            <select
                id="fruits"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                {options.map((fruit) => (
                    <option key={fruit} value={fruit}>
                        {fruit}
                    </option>
                ))}
            </select>
        </div>
    );
}
