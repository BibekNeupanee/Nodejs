import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Header.scss";
import BottomHeader from "../BottomHeader/BottomHeader";
import useLocalStorage from "../../hooks/useLocalStorage";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
    // navigate("/");
  };

  const [user, setUser] = useLocalStorage("user", {});
  if (localStorage.getItem("token")) {
    return (
      <header class="main-header">
        <div class="main-header__top">
          <div class="main-header__contact">
            <i class="fa-solid fa-mobile-button" />
            +977-9861282149
          </div>
          <div class="main-header__user-links">
            <Link to={"/profile/" + user?.username} href="#">
              <i class="fa-solid fa-user" />
              <span> &nbsp; {user?.name}</span>
            </Link>
            <Link to={"/cart"} href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to={"/"} onClick={() => handleLogout()}>
              <i class="fa-solid fa-right-from-bracket"></i>
            </Link>
          </div>
        </div>
        <BottomHeader />
      </header>
    );
  } else {
    return (
      <header class="main-header">
        <div class="main-header__top">                                                          
          <div class="main-header__contact">
            <i class="fa-solid fa-mobile-button" />
            +977-9861282149
          </div>
          <div class="main-header__user-links">
            <Link to={"/login"}>
              <i class="fa-solid fa-user" />
              <span>{user?.name}</span>
            </Link>
            <Link to={"/login"}>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
        <BottomHeader />
      </header>
      // <div className="settings">
      //   <Link to={"/login"} className="settings__link">
      //     Login
      //   </Link>
      //   <Link to={"/register"} className="settings__link">
      //     Register
      //   </Link>
      //   {localStorage.getItem("token") ? (
      //     <Link to={"/cart"} className="settings__link">
      //       My Cart
      //     </Link>
      //   ) : (
      //     <Link to={"/login"} className="settings__link">
      //       My Cart
      //     </Link>
      //   )}
      // </div>
    );
  }
}

export default Header;
