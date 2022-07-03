import "./navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useContext } from "react";
import { ActiveElementContext } from "../../context/ActiveElement";

export const Navigation = () => {
  const { activeElement, handleActiveElement } =
    useContext(ActiveElementContext);

  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a
        href="#"
        onClick={() => handleActiveElement("header")}
        className={activeElement === "header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleActiveElement("#about")}
        className={activeElement === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleActiveElement("#experience")}
        className={activeElement === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleActiveElement("#portfolio")}
        className={activeElement === "#portfolio" ? "active" : ""}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="#contact"
        onClick={() => handleActiveElement("#contact")}
        className={activeElement === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
