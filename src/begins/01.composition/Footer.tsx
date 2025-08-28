import { type User } from "./data/types";

export function Footer({ user }: { user: User }) {
    return (
        <footer
            className="bg-gray-800 text-white text-center py-4 mt-auto"
            style={{ backgroundColor: "var(--accent-color)" }}
        >
            <p>
                Don't have a good day–have a great day,{" "}
                <span className="font-semibold">{user.name}</span>
            </p>
        </footer>
    );
}