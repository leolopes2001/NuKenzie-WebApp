import NuKenzieBlack from "../../assets/NuKenzieBlack.svg";
import "./style.css";
import { Menu } from "../Menu";
export const Header = ({setSideBarActive, setIsLoggedIn }) => {
  return (
    <header>
      <div className="containerHeader">
        <Menu setSideBarActive={setSideBarActive}/>
        <img src={NuKenzieBlack} alt="LogoNuKenzie" />
        <button onClick={() => setIsLoggedIn()}>Inicio</button>
      </div>
    </header>
  );
};
