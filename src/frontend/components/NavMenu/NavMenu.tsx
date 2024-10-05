import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-menu">
      <NavLink
        to={"/social"}
        className={({ isActive }) =>
          `navigation-menu__link ${
            isActive ? "navigation-menu__link--active" : ""
          }`
        }
      >
        Social
      </NavLink>
      <NavLink
        to={"/educacio"}
        className={({ isActive }) =>
          `navigation-menu__link ${
            isActive ? "navigation-menu__link--active" : ""
          }`
        }
      >
        Educació
      </NavLink>
      <NavLink
        to={"/caritat"}
        className={({ isActive }) =>
          `navigation-menu__link ${
            isActive ? "navigation-menu__link--active" : ""
          }`
        }
      >
        Caritat
      </NavLink>
      <NavLink
        to={"/cuinar"}
        className={({ isActive }) =>
          `navigation-menu__link ${
            isActive ? "navigation-menu__link--active" : ""
          }`
        }
      >
        Cuinar
      </NavLink>
    </nav>
  );
};

export default NavMenu;
