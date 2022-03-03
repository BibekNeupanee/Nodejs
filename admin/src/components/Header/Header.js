import React from "react";
import Menu from "../Menu/Menu";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="side-nav">
        <div className="logo">LOGO</div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
