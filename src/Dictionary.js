import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState("null");

  function handleDisplay(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "943a3ddbo20b374aff624c0t29d891a1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDisplay);
  }
  function updateWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="search-Button"
          type="search"
          autoFocus={true}
          required
          placeholder="Enter word..."
          onChange={updateWord}
        />
        <input type="submit" value="search" className="submit-Button" />
      </form>
      <Results results={results} />
    </div>
  );
}
