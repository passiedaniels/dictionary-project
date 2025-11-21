import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      <div className="defination">{props.meaning.definition}</div>

      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
