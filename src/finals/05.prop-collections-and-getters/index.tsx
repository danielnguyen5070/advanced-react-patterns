import { type SportData, type User } from "../../shared/types.tsx";
import { useState } from "react";
import { allSports } from "./data/sportsData.tsx";
import { Footer } from "./Footer.tsx";
import { Nav } from "./Nav.tsx";
import Main from "./main";
import { Details } from "./main/Details.tsx";
import { List } from "./main/List.tsx";
import { SportListItemButton } from "./main/SportListItemButton.tsx";

function App() {
  const [user] = useState<User>({ name: "Pika", image: "/img/pikachu.png" });
  const [sportList] = useState<Array<SportData>>(() =>
    Object.values(allSports)
  );
  const [selectedSport, setSelectedSport] = useState<SportData | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div
      id="app-root"
      className={`min-h-screen text-gray-800 ${isDarkTheme ? "bg-gray-500" : "bg-gray-50"}`}
      style={{
        ["--accent-color" as keyof React.CSSProperties]:
          selectedSport?.color ?? "black",
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Nav
          theme={isDarkTheme}
          setTheme={setIsDarkTheme}
          avatar={<img
            src={user.image}
            alt={`${user.name} profile`}
            className="w-full h-full object-cover"
          />}
        />
        <Main
          list={<List
            sportList={
              sportList.map((p) => (
                <li key={p.id}>
                  <SportListItemButton
                    sport={p}
                    onClick={() => setSelectedSport(p)}
                  />
                </li>
              ))}
          />}
          content={<Details selectedSport={selectedSport} />}
        />
        <Footer message={<p>
          Don't have a good day–have a great day,{" "}
          <span className="font-semibold">{user.name}</span>
        </p>} />
      </div>
    </div>
  );
}

export default App;
