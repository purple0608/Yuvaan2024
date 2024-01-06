export const NavItem = ({ link, text, icon }) => {
  return (
    <li className="list-item">
      <span className="icon">{icon}</span>
      <div className="nav-text">{text}</div>
      <span className="circle"></span>
    </li>
  );
};
