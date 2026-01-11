import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="section" style={{ width: "100%" }}>
        <div className="section-wrapper">
          <div className="section-icon">
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </div>
          <div className="section-content">
            <h2>Contact</h2>
            listItems
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
