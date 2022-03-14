import React from "react";
import useFetch from "../../hooks/useFetch";

function BookAuthorList(props) {
  const data = useFetch(`http://localhost:3000/bookauthors/${props.bookId}`)
    ?.authors || [props];

  return data.map((author, i) => <span key={i}>{author.name}</span>);
}

export default BookAuthorList;
