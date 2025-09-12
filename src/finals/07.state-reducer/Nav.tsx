
import { useState } from "react";

export function Nav({ avatar, theme }: { avatar: React.ReactNode, theme: React.ReactNode }) {
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
                    <Dropdown />
                </li>
                <li className="items-center flex">
                    <a href="#/contact" className="hover:text-blue-600">
                        Contact
                    </a>
                </li>
            </ul>
            {theme}
        </nav>
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
