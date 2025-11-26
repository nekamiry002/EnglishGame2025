import { NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useRef } from "react";

export default function Header() {
    
    const headerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${h}px`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

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
