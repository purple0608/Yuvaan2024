import { useEffect } from "react";
import { data } from "../../assets/utils/NavbarData";
import { HomeIcon } from "/src/assets/utils/icons";
import { NavItem } from "./NavItem";
import "/src/assets/utils/Navbar.css";
import { NavBarEffect } from "./NavBarEffect";

const NavBar = () => {
  useEffect(() => {
    NavBarEffect();
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="../../../public/logo.png" alt="" />
        </div>
        <div className="navigation">
          <ul>
            <li className="list active">
              <a href="/">
                <span className="icon">
                  <HomeIcon />
                </span>

                <span className="text">Home</span>
                <span className="circle"></span>
              </a>
            </li>
            {data.map((item, index) => {
              return <NavItem {...item} key={item.id} />;
            })}
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
