import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Composition from "./exercises/01.composition";
import LatestRef from "./exercises/02.latest-ref";
import CompoundComponents from "./exercises/03.compound-components";
import Slots from "./exercises/04.slots";
import PropCollectionsAndGetters from "./exercises/05.prop-collections-and-getters";
import StateInitializer from "./exercises/06.state-initializer";
import StateReducer from "./exercises/07.state-reducer";
import ControlProps from "./exercises/08.control-props";

const routes = [
  { path: "/composition", element: <Composition /> },
  { path: "/latest-ref", element: <LatestRef /> },
  { path: "/compound-components", element: <CompoundComponents /> },
  { path: "/slots", element: <Slots /> },
  {
    path: "/prop-collections-and-getters",
    element: <PropCollectionsAndGetters />,
  },
  { path: "/state-initializer", element: <StateInitializer /> },
  { path: "/state-reducer", element: <StateReducer /> },
  { path: "/control-props", element: <ControlProps /> },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex">
        <div style={{ display: sidebarOpen ? "none" : "block" }}>
          <Sidebar />
        </div>
        <main
          className={`p-6 flex-1 ${
            sidebarOpen ? "ml-0" : "ml-64"
          } transition-all duration-300 ease-in-out`}
        >
          <button
            className="fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
