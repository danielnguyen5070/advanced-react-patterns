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
