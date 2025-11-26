import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="main-header">
      <NavLink to="/rules" className="header-link">
        Rules
      </NavLink>
      <NavLink to="/server-1" className="header-link">
        Server 1
      </NavLink>
      <NavLink to="/server-2" className="header-link">
        Server 2
      </NavLink>
      <NavLink to="/server-3" className="header-link">
        Server 3
      </NavLink>
      <NavLink to="/server-4" className="header-link">
        Server 4
      </NavLink>
    </div>
  );
}
