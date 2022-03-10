import React, { useEffect, useState } from "react";

function BookType(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch(`http://localhost:3000/book-types/${props.btId}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.bookType);
      });
  }, []);
  return data.map((bookTypes, i) => <span key={i}>{bookTypes.name}</span>);
}

export default BookType;
