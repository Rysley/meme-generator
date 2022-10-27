import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--title">
        <FontAwesomeIcon className="header--icon" icon={faDumpsterFire} />
        <h2>Meme Generator</h2>
      </div>
      <div className="header--subtitle">
        <h3>React Project #3</h3>
      </div>
    </div>
  );
}
