import { CartWidget } from "../cartWidget/CartWidget";
import { useState } from "react";
import logoEmpresa from "../../assets/imgs/logoEmpresa.png";
import { MaterialUISwitch } from "../Switch/Switch";
import "./navBar.css";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "lightNavBar" : "darkNavbar"}>
      <table>
        <tr>
          <td>
            <img src={logoEmpresa} width="80px" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="logoEmpresa">Deco Design</span>
          </td>
        </tr>
      </table>
      <ul className="navBar_list">
        <li>
          <a href="">Dormitorio</a>
        </li>
        <li>
          <a href="">Patio</a>
        </li>
        <li>
          <a href="">Comedor</a>
        </li>
        <li>
          <a href="">Living</a>
        </li>
      </ul>
      <MaterialUISwitch onChange={cambiarModo} />
      <CartWidget />
    </div>
  );
};
