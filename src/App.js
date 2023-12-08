import GifList from "./components/GifList";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState } from "react";
import "./App.css";

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);

    const apiCall = async () => {
      const res = await giphy.search(e.target.value, { limit: 20 });
      console.log(res);
      setResults(res.data);
    };

    apiCall();
  };

  return (
    <div className="App">
      <h1>Gif Generator</h1>
      <h3>Type text into the form</h3>
      <input className="input-field" value={text} onChange={handleChange} />
      {results && <GifList gifs={results} />}
    </div>
  );
}
export default App;
