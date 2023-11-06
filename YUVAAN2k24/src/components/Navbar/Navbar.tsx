import React, { useEffect } from "react";
import { data } from "../../assets/NavbarData";
import { HomeIcon } from "../../assets/icons";
import  NavItem  from "./NavItem";
import "./Navbar.css";
import NavBarEffect from "./NavBarEffect"; // Import the utility function

const NavBar = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");

    function activeLink(event: Event) {
      list.forEach((item) => item.classList.remove("active"));
      const clickedListItem = event.currentTarget as HTMLElement;
      clickedListItem.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="../../../logo.png" alt="" />
        </div>
        <div className="navigation">
          <ul>
            <li className="list active">
              <a href="#">
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
