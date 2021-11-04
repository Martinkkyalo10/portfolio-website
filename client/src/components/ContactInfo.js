import React from "react";
import { email } from "../data";

import Fade from "react-reveal/Fade";

export default function ContactInfo() {
  return (
    <div className="contact container-fluid section" name="contact">
      <Fade bottom>
        <h2 className="section-header">Want to talk?</h2>
      </Fade>
      <Fade bottom>
        <p>
          Hit me up at{" "}
          <a href={"mailto:" + email} className="card-link">
            {email}
          </a>{" "}
          or <br />
          CALL: <span className="card-link">+254715836392</span> to enquire
          about collaboration.
        </p>
      </Fade>
    </div>
  );
}
