import { useState } from "react";

export default function App() {
  const [data, setData] = useState<string | null>("");
  function api() {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((a) => {
        setData(a.fact);
      });
  }
  return (
    <div>
      <button onClick={api}>Generate Cat Fact</button>
      <p>{data}</p>
    </div>
  );
}
