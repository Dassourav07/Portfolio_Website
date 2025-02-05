import "./about.css";
import Me from "../../assets/me12.jpg";
// import { FiAward } from "react-icons/fi";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <p>
          looking to put my technology and leadership skills to use in a major organisation. 
          well-versed in algorithms and data structures. 
          tech-savvy, fast to pick up new skills, technologically interested by nature, 
          and an excellent communicator In addition to producing programming, 
          I enjoy blogging, exploring new locations, and talking about new technology.
          </p>
          <h4 className="span-text">Want to know more?</h4>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};
