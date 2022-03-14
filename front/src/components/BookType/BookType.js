import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

function BookType(props) {
  // const [data, setData] = useState([]);
  // useEffect((_) => {
  //   fetch(`http://localhost:3000/book-types/${props.btId}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json.bookType);
  //     });
  // }, []);

  const data =
    useFetch(`http://localhost:3000/book-types/${props.btId}`)?.bookType || [];

  return data.map((bookTypes, i) => <span key={i}>{bookTypes.name}</span>);
}

export default BookType;
