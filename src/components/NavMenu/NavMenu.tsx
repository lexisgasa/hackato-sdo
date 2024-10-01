import "./NavMenu.css";

const NavMenu = (): React.ReactElement => {
  return (
    <nav>
      <ul className="navigation-menu">
        <li className="navigation-menu__link">
          <button className="navigation-menu__button navigation-menu__button--active">
            Social
          </button>
        </li>
        <li className="navigation-menu__link">
          <button className="navigation-menu__button">Educació</button>
        </li>
        <li className="navigation-menu__link">
          <button className="navigation-menu__button">Caritat</button>
        </li>
        <li className="navigation-menu__link">
          <button className="navigation-menu__button">Cuinar</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
