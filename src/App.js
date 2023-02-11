import "./styles.css";
import React, { useState } from "react";

var emogiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "❤️": "Red Heart",
  "🔥": "Fire",
  "🙃": "Upside-Down Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😑": "Expressionless Face"
};

var emogisWeKnow = Object.keys(emogiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emogiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emogiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this our database!";
    }
    setMeaning(meaning);
  }
  function emogiClickHandler(emogi) {
    var meaning = emogiDictionary[emogi];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={emogiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3> emogis we know </h3>
      {emogisWeKnow.map(function (emogi) {
        return (
          <span
            onClick={() => emogiClickHandler(emogi)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emogi}
          >
            {emogi}{" "}
          </span>
        );
      })}
    </div>
  );
}
