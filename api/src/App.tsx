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
      <button
        onClick={api}
        className="border border-blue-600 bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        Generate Cat Fact
      </button>

      <p className="text- text-5xl text-red-500">{data}</p>
    </div>
  );
}
