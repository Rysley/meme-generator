import React from "react";

export default function Form() {
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
        <button className="form--btn">Get a random meme image 🖼</button>
      </div>
    </div>
  );
}
