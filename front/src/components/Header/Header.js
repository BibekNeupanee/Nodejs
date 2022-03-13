import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.scss";

function Header() {
  

  return (
    <header>
      <Link to={"/"} className="logo">
        <img
          src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80"
          alt="abc"
          className="image"
        />
      </Link>
      <Menu />
      {/* usercontrol component */}
    </header>
  );
}

export default Header;
