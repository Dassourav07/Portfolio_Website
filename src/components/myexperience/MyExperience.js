import "./myexperience.css";
import html from "../../assets/icons/html-5.svg";
import css from "../../assets/icons/css3.svg";
import react from "../../assets/icons/reactjs.svg";
import javascript from "../../assets/icons/javascript.svg";
import git from "../../assets/icons/git.svg";
import materialui from "../../assets/icons/material-ui.svg";
import python from "../../assets/icons/Python.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import SQLite from "../../assets/icons/SQLite-Logo.wine.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import ibm_cloud from "../../assets/icons/ibm_cloud-ar21.svg";
import django from "../../assets/icons/django-logo.svg";

function MyExperience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details">
            <img src={html} alt="html" />
            <h4>HTML</h4>
          </article>
          <article className="experience__details">
            <img src={css} alt="css" />
            <h4>CSS</h4>
          </article>
          <article className="experience__details">
            <img src={javascript} alt="javascript" />
            <h4>JavaScript</h4>
          </article>
          <article className="experience__details">
            <img src={react} alt="react" />
            <h4>React</h4>
          </article>
          <article className="experience__details">
            <img src={SQLite} alt="SQLite" />
            <h4>SQLite</h4>
          </article>
          <article className="experience__details">
            <img src={python} alt="python" />
            <h4>Python</h4>
          </article>
          <article className="experience__details">
            <img src={django} alt="SQLite" />
            <h4>Django</h4>
          </article>
          <article className="experience__details">
            <img src={materialui} alt="materialui" />
            <h4>Material UI</h4>
          </article>
          <article className="experience__details">
            <img src={git} alt="git" />
            <h4>GitHub</h4>
          </article>
          <article className="experience__details">
            <img src={nodejs} alt="node.js" />
            <h4>Node.js</h4>
          </article>
          <article className="experience__details">
            <img src={ibm_cloud} alt="ibm_cloud" />
            <h4>IBM Cloud</h4>
          </article>
          <article className="experience__details">
            <img src={bootstrap} alt="bootstrap" />
            <h4>Bootstrap</h4>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MyExperience;
