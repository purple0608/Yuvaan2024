import { data } from "../../assets/utils/NavbarData";
import { NavItem } from "./NavItem";
import "/src/assets/utils/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="./src/assets/utils/logo.png" alt="" />
      </div>
      <ul className="list">
        {data.map((item, index) => {
          return (
            <Link to={`/${item.link}`} className="link">
              <NavItem {...item} key={index} />
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
