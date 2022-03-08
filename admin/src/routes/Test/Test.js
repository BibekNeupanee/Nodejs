import React, { useEffect, useState } from "react";

function Test() {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {data.map((todo, i) => (
        <div key={i}>{todo.title}</div>
      ))}
    </div>
  );
}

export default Test;
