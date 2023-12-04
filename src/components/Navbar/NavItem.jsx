import {Link} from "react-router-dom";
export const NavItem = ({ id, link, text, icon }) => {
  return (
    <li className="list">
      <Link to={link}>
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
        <span className="circle"></span>
      </Link>
    </li>
  );
};
