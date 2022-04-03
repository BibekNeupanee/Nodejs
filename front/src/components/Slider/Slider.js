import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Slider.scss";

function Slider() {
  const books = useFetch(`http://localhost:3000/books`)?.books || [];
  return <div className="slider">Slider</div>;
}

export default Slider;
