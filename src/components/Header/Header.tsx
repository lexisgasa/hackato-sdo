import { BiSolidPlanet } from "react-icons/bi";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <BiSolidPlanet className="header__icon" />
      <h1>Boored</h1>
    </div>
  );
};

export default Header;
