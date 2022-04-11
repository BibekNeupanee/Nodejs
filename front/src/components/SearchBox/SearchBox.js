import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBox() {
  const [input, setInput] = useState("");

  return (
    <div class="main-search">
      <input
        type="text"
        placeholder="Search for Books by Keyword"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button
        to={"/search/" + input}
        onClick={() => (window.location.href = "/search/" + input)}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBox;
