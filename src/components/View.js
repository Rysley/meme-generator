import React from "react";

export default function View(props) {
  return (
    <div className="view--container">
      <div className="view--image">
        <div className="view--text view--text-top">
          {props.memeData.topText}
        </div>
        <img
          src={props.memeData.randomImage}
          alt={props.memeData.randomImage}
        />
        <div className="view--text view--text-bottom">
          {props.memeData.bottomText}
        </div>
      </div>
    </div>
  );
}
