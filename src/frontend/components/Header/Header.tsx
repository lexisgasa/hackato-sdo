import { BiSolidPlanet } from "react-icons/bi";
import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="heading">
        <BiSolidPlanet className="heading__icon" />
        <h1 className="heading__title">Boored</h1>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
