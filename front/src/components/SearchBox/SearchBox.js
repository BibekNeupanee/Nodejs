import React from "react";
import "./SearchBox.scss";

function SearchBox() {
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fa fa-search"></i>
      </button>
      <input type="text" className="input-search" placeholder="Type to Search..." />
    </div>
  );
}

export default SearchBox;
