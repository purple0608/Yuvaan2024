export const NavItem = ({ id, link, text, icon }) => {
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
