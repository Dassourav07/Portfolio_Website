import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im";
import {ImInstagram} from "react-icons/in"

export const HeaderSocial = () => {
  return (
    <div>
      <div className="header__socials">
        <a
          href="https://in.linkedin.com/in/sourav-das-073384230?trk=public_profile_browsemap"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Dassourav07" 
        target="_blank" 
        rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+918967969758"
        target="_blank" 
        rel="noreferrer">
          <ImWhatsapp />
        </a>
        <a href="https://www.instagram.com/dsourav7/"
        target="_blank" 
        rel="noreferrer">
          <ImInstagram />
        </a>
      </div>
    </div>
  );
};
