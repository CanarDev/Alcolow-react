import React, {useEffect, useState} from "react";

function Cocktails() {
  const [data, setData] = useState("");
  const getData = async () => {
    const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
export default Cocktails;
