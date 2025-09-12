import { type SportData, type User } from "../../shared/types.tsx";
import { useState, useReducer } from "react";
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
  const [timeClicked, setTimeClicked] = useState(0);
  const { on, getTogglerProps } = useToggle({
    initialValue: false,
    reducer: (state: ToggleState, action: ToggleAction) => {
      if (action.type === 'toggle' && timeClicked >= 4) {
        return state;
      }
      return toggleReducer(state, action);
    }
  })

  return (
    <div
      id="app-root"
      className={`min-h-screen text-gray-800 ${on ? "bg-gray-500" : "bg-gray-50"}`}
      style={{
        ["--accent-color" as keyof React.CSSProperties]:
          selectedSport?.color ?? "black",
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Nav
          theme={<ToggleButton {...getTogglerProps({
            on: on,
            onClick: () => {
              setTimeClicked(c => c + 1);
            }
          })} />}
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


type ToggleAction =
  | { type: 'toggle' }
  | { type: 'reset', initialValue: boolean };

type ToggleState = { on: boolean };

function toggleReducer(state: ToggleState, action: ToggleAction): ToggleState {
  switch (action.type) {
    case 'toggle':
      return { on: !state.on };
    case 'reset':
      return { on: action.initialValue };
    default:
      throw new Error();
  }
}

function callAll<Args extends unknown[]>(...fns: Array<((...args: Args) => void) | undefined>) {
  return (...args: Args) => fns.forEach(fn => fn && fn(...args));
}

function useToggle({ initialValue = false, reducer = toggleReducer }: { initialValue: boolean, reducer: (state: ToggleState, action: ToggleAction) => ToggleState }) {
  const [on, setOn] = useReducer(reducer, { on: initialValue });

  function toggle() {
    setOn({ type: 'toggle' });
  }

  function reset() {
    setOn({ type: 'reset', initialValue });
  }

  function getTogglerProps<Props>({ onClick, ...props }: { onClick: () => void } & Props) {
    return {
      on: on,
      setOn: callAll(onClick, toggle),
      ...props
    };
  }

  return { on: on.on, toggle, reset, getTogglerProps };
}

function ToggleButton({ on, setOn }: { on: boolean, setOn: () => void }) {
  return (
    <button
      onClick={() => setOn()}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${on ? "bg-blue-600" : "bg-gray-300"
        }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${on ? "translate-x-6" : "translate-x-1"
          }`}
      />
    </button>
  );
}

export default App;
