import React from "react";
import View from "./View";
import memesData from "../assets/memesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
 

  const [currMeme, setCurrMeme] = React.useState("");

  function handleClick() {
    const memesArray = memesData.data.memes;
    const randNum = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randNum];
    setCurrMeme(url);
  }

  return (
    <div className="form--container">
      <div className="form--section">
        <input
          className="form--input"
          type="text"
          placeholder="Top Text"
        ></input>
        <input
          className="form--input"
          type="text"
          placeholder="Bottom Text"
        ></input>
      </div>
      <div className="form--section">
        <button onClick={handleClick} className="form--btn">
          Get a random meme image <FontAwesomeIcon icon={faRandom} />
        </button>
      </div>
      <View src={currMeme} />
    </div>
  );
}
