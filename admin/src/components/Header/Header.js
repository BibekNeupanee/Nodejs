import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import settings from "../../resources/settings.png";
import Headermenu from "../HeaderMenu/Headermenu";

function Header() {
  return (
    <div className="header">
        <Headermenu />
      <div className="header__settings">
        <Link to={"/settings"}>
          <input type="image" src={settings} alt="settings" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
