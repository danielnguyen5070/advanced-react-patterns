

import { SportListItemButton } from "./SportListItemButton";
import { type SportData } from "../data/types.tsx";

export function List({
    sportList,
    setSelectedSport,
}: {
    sportList: Array<SportData>;
    setSelectedSport: (sport: SportData) => void;
}) {
    return (
        <div>
            <ul className="space-y-4">
                {sportList.map((p) => (
                    <li key={p.id}>
                        <SportListItemButton
                            sport={p}
                            onClick={() => setSelectedSport(p)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}