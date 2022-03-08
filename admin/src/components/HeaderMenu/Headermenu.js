import React from "react";
import { Link } from "react-router-dom";

function Headermenu() {
  return (
    <div className="menu">
      <div className="dashboard">
        <Link to={"/"}>Dashboard</Link>
      </div>
    </div>
  );
}

export default Headermenu;
