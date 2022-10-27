import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--social">
        <FontAwesomeIcon icon={faInstagram} className="ico" />
        <FontAwesomeIcon icon={faSnapchat} className="ico" />
        <FontAwesomeIcon icon={faTiktok} className="ico" />
        <FontAwesomeIcon icon={faYoutube} className="ico" />
      </div>
      <small> RxLx Dev. (c) All right reserved</small>
    </div>
  );
}
