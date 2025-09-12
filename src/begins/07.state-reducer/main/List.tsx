import type React from "react";

export function List({ sportList }: { sportList: React.ReactNode; }) {
    return (
        <div>
            <ul className="space-y-4">
                {sportList}
            </ul>
        </div>
    );
}