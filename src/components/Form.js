import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

export default function Form(props) {
  return (
    <div className="form--container">
      <div className="form--section">
        <input
          name="topText"
          className="form--input"
          type="text"
          placeholder="Top Text"
          onChange={props.handleText}
          value={props.memeData.topText}
        ></input>
        <input
          name="bottomText"
          className="form--input"
          type="text"
          placeholder="Bottom Text"
          value={props.memeData.bottomText}
          onChange={props.handleText}
        ></input>
      </div>
      <div className="form--section">
        <button onClick={props.handleImage} className="form--btn">
          Get a random meme image <FontAwesomeIcon icon={faRandom} />
        </button>
      </div>
    </div>
  );
}
