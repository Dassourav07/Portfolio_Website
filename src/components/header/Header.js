import { CTA } from "./own";
import ME from "../../assets/me12.jpg";

import "./header.css";
import { HeaderSocial } from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header__container">  
        <h4>
          Hello <span className="wave">👋</span> , I'm
        </h4>
        <h1>Sourav Das</h1>
        <h3 className="text-light">Enthusiastic In DSA</h3>     
        <div className="me">
          <img className="megif" src={ME} alt="me" />
        </div> 
        <CTA />
        <HeaderSocial />
      </div>
    </header>
  );
}

export default Header;
