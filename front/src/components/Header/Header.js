import React from "react";
import logo from "./../../resources/logo.png";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.scss";
import SearchBox from "../SearchBox/SearchBox";

function Header() {
  return (
    <header>
      <Link to={"/"} className="logo">
        <img src={logo} alt="abc" className="image" />
      </Link>
      <SearchBox />
      <Menu />
      {/* usercontrol component */}
    </header>
  );
}

export default Header;
