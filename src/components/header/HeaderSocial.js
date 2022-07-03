import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im"

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

      </div>
    </div>
  );
};
