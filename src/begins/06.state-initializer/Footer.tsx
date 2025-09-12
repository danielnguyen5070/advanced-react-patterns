export function Footer({ message }: { message: React.ReactNode }) {
    return (
        <footer
            className="bg-gray-800 text-white text-center py-4 mt-auto"
            style={{ backgroundColor: "var(--accent-color)" }}
        >
            {message}
        </footer>
    );
}