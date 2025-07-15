import { useState } from "react";
import { SportDataView } from "../../shared/sports.tsx";
import { allSports } from "../../shared/sportsData.tsx";
import { type SportData, type User } from "../../shared/types.tsx";

function App() {
  const [user] = useState<User>({ name: "Pika", image: "/img/pikachu.png" });
  const [sportList] = useState<Array<SportData>>(() =>
    Object.values(allSports)
  );
  const [selectedSport, setSelectedSport] = useState<SportData | null>(null);

  return (
    <div
      id="app-root"
      className="min-h-screen bg-gray-50 text-gray-800"
      style={{
        ["--accent-color" as keyof React.CSSProperties]:
          selectedSport?.color ?? "black",
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Nav user={user} />
        <main className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
          <List sportList={sportList} setSelectedSport={setSelectedSport} />
          <div className="min-w-full col-span-2">
            <Details selectedSport={selectedSport} />
          </div>
        </main>
        <Footer user={user} />
      </div>
    </div>
  );
}

function Nav({ user }: { user: User }) {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <ul className="flex gap-4 text-sm font-medium">
        <li>
          <a href="#/home" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#/about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#/contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
      <a
        href="#/me"
        title="User Settings"
        className="w-10 h-10 overflow-hidden"
      >
        <img
          src={user.image}
          alt={`${user.name} profile`}
          className="w-full h-full object-cover"
        />
      </a>
    </nav>
  );
}

function List({
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

function SportListItemButton({
  sport,
  onClick,
}: {
  sport: SportData;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={sport.name}
      style={{ ["--accent-color" as keyof React.CSSProperties]: sport.color }}
      className="flex items-center p-3 bg-gray-200 rounded-lg  hover:bg-gray-100 transition border-gray-200 w-full text-left"
    >
      <img
        src={sport.image}
        alt={sport.name}
        className="w-12 h-12 object-contain mr-4"
      />
      <div>
        <strong className="text-lg text-gray-700">{sport.name}</strong>
      </div>
    </button>
  );
}

function Details({ selectedSport }: { selectedSport: SportData | null }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow border border-gray-200 min-h-[200px] flex items-center justify-center w-full">
      {selectedSport ? (
        <SportDataView sport={selectedSport} />
      ) : (
        <div className="text-gray-500 italic"></div>
      )}
    </div>
  );
}

function Footer({ user }: { user: User }) {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>
        Don't have a good day–have a great day,{" "}
        <span className="font-semibold">{user.name}</span>
      </p>
    </footer>
  );
}

export default App;
