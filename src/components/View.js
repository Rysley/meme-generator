import React from "react";
//import memesData from "../assets/memesData";

export default function View(props) {
  console.log(props.memeData);
  return (
    <div className="view--container">
      {
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
      }
    </div>
  );
}
