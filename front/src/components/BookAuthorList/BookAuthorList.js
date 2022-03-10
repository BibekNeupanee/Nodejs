import React, { useEffect, useState } from "react";

function BookAuthorList(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch(`http://localhost:3000/bookauthors/${props.bookId}`)
      .then((response) => response.json())
      .then((json) => setData(json.authors));
  }, []);
  return data.map((author, i) => <span key={i}>{author.name}</span>);
}

export default BookAuthorList;
