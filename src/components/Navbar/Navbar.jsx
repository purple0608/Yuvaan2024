import React from "react";
import { Link } from "react-router-dom";
import "../../assets/utils/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CameraIcon from "@mui/icons-material/Camera";
import logo from "/src/assets/utils/logo.png";

const NavBar = () => {
  const navItems = [
    { to: "/", text: "Home", icon: HomeIcon },
    { to: "/events", text: "Events", icon: EventIcon },
    { to: "/sponsors", text: "Sponsors", icon: AccountBalanceWalletIcon },
    { to: "/gallery", text: "Gallery", icon: CameraIcon },
    { to: "/team", text: "Team", icon: GroupIcon },
    { to: "/contact", text: "Contact", icon: CallIcon },
  ];

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="yuvaan" />
      </div>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <Link to={item.to} className="nav-link" key={index}>
            <li className="nav-list-item">
              <div className="nav-icon">{<item.icon />}</div>
              <div className="nav-text">{item.text}</div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
