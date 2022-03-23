import React from "react";
import useFetch from "../../hooks/useFetch";

function BookType(props) {
  const data =
    useFetch(`http://localhost:3000/booktypes/${props.btId}`)?.bookType || [];

  return data.map((bookTypes, i) => <span key={i}>{bookTypes.name}</span>);
}

export default BookType;
