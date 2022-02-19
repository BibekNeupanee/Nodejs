import React from "react";
import Menu from "../Menu/Menu";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <Menu />
      {/* usercontrol component */}
    </header>
  );
}

export default Header;
