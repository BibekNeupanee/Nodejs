import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState({});
  useEffect(
    (_) => {
      (async function () {
        const response = await fetch(url);
        const rows = await response.json();
        setData(rows);
      })();
    },
    [url]
  );

  return data;
}

export default useFetch;
