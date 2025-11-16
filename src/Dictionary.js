import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} defination`);
  }
  function updateWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          required
          placeholder="Enter word..."
          onChange={updateWord}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
