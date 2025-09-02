import { type SportData, type User } from "../../shared/types.tsx";
import { useState } from "react";
import { allSports } from "./data/sportsData.tsx";
import { Footer } from "./Footer.tsx";
import { Nav } from "./Nav.tsx";
import Main from "./main";

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
        <Nav user={user} theme={isDarkTheme} setTheme={setIsDarkTheme} />
        <Main
          sportList={sportList}
          selectedSport={selectedSport}
          setSelectedSport={setSelectedSport}
        />
        <Footer user={user} />
      </div>
    </div>
  );
}

export default App;
