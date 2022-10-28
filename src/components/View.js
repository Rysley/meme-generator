import React from "react";
//import memesData from "../assets/memesData";

export default function View(props) {
  return (
    <div className="view--container">
      <div className="view--image">
        {<img src={props.src} alt={props.src} />}
      </div>
    </div>
  );
}
