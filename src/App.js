import logo from './logo.svg';
import './App.css';
import Rules from "./Rules";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import servers from "./data/servers.json";

import ServerLogin from "./components/ServerLogin";
import Header from './Header';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/rules" />} />
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

          <Route path="/rules" element={<Rules />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
