import React from "react";
import View from "./View";
import memesData from "../assets/memesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [allMemeImg, setAllMemeImg] = React.useState(memesData.data.memes);

  const [currMeme, setCurrMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  function handleClick() {
    const randNum = Math.floor(Math.random() * allMemeImg.length);
    const { url } = allMemeImg[randNum];
    setCurrMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
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
      <View src={currMeme.randomImage} />
    </div>
  );
}
