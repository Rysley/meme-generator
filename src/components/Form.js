import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

export default function Form(props) {
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
        <button onClick={props.handleEvent} className="form--btn">
          Get a random meme image <FontAwesomeIcon icon={faRandom} />
        </button>
      </div>
    </div>
  );
}
