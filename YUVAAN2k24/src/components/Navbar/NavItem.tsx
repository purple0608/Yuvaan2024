import React from 'react';

interface NavItemProps {
  link: string;
  text: string;
  icon: React.ReactNode; // Assuming icon is a React Node
}

const NavItem: React.FC<NavItemProps> = ({ link, text, icon }) => {
  return (
    <li className="list">
      <a href={link}>
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
        <span className="circle"></span>
      </a>
    </li>
  );
};

export default NavItem;
