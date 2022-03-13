import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBox.scss";

function SearchBox() {
  const [input, setInput] = useState("");

  return (
    <div className="search-box">
      <Link to={"/search/" + input} className="btn-search">
        <i className="fa fa-search"></i>
      </Link>
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
