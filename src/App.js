import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import servers from "./data/servers.json";

import ServerLogin from "./components/ServerLogin";

import Server1 from "./pages/Server1";
import Server2 from "./pages/Server2";
import Server3 from "./pages/Server3";
import Server4 from "./pages/Server4";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/server-1"
          element={
            <ServerLogin
              serverName="Server 1"
              validResponses={servers.server1}
            />
          }
        />

        <Route
          path="/server-2"
          element={
            <ServerLogin
              serverName="Server 2"
              validResponses={servers.server2}
            />
          }
        />

        <Route
          path="/server-3"
          element={
            <ServerLogin
              serverName="Server 3"
              validResponses={servers.server3}
            />
          }
        />

        <Route
          path="/server-4"
          element={
            <ServerLogin
              serverName="Server 4"
              validResponses={servers.server4} 
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
