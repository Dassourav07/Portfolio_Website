import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import {ImWhatsapp } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <section>
      <h5> Thank You For Your Visit!</h5>
        <div className="socials">
          <a
            href="https://in.linkedin.com/in/sourav-das-073384230?trk=public_profile_browsemap"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sourav--das//"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+91-8967969758"
            target="_blank"
            rel="noreferrer"
          >
            <ImWhatsapp />
          </a>
          <a href="https://github.com/Dassourav07" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="spacer">
        <p></p>
      </div>
      </section>
    </footer>
  );
}
