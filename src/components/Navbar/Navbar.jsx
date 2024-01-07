import React from "react";
import { Link } from "react-router-dom";
import "../../assets/utils/Navbar.css";
import {
  HomeIcon,
  CashIcon,
  CalendarIcon,
  CameraIcon,
} from "../../assets/utils/icons";

const NavBar = () => {
  const navItems = [
    { to: "/", text: "Home", icon: HomeIcon },
    { to: "/events", text: "Events", icon: CalendarIcon },
    { to: "/sponsors", text: "Sponsors", icon: CashIcon },
    { to: "/timeline", text: "Gallery", icon: CameraIcon },
  ];

  return (
    <nav className="navb">
      <div className="nav-logo">
        <img src="./src/assets/utils/logo.png" alt="yuvaan" />
      </div>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <Link to={item.to} className="nav-link" key={index}>
            <li className="nav-list-item">
              <span className="nav-icon">{item.icon()}</span>
              <div className="nav-text">{item.text}</div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
