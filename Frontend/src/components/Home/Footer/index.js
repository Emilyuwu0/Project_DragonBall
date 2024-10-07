import React from "react";
import CatEmily from "../../../assets/gato.svg";
import "./index.css";
import Planets from "../Planets";
import Characters from "../../../pages/Characters/Characters";
import About from "../../../pages/About/About";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="group-relative">
      <div class="container-footer">
        <div class="column-footer ">
          {" "}
          <img src={CatEmily} alt="LogoEmily" className="cat-color" />
          <p className="footer-name">Emily Orduz.</p>
          <p className="subtitle-about"> Frontend / Diseño.</p>
        </div>
        <div class="column-footer ">
          <p className="title-contact-footer">Contacto</p>
          {contact.map((item) => (
            <Link key={item.id} to={item.href} className="margin-bottom-min">
              <span className="item-nav  subtitle-about"> {item.title}</span>
            </Link>
          ))}
        </div>
        <div className="line-decoration"></div>
        <p className="subtitle-about center-text">2024</p>
      </div>
    </div>
  );
}
const contact = [
  {
    id: 1,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/emily-tatiana-orduz-barrera-75968b152/",
    view: "",
  },
  {
    id: 2,
    title: "Gmail",
    href: "mailto:tbarrera679@gmail.com",
    view: "",
  },
  {
    id: 3,
    title: "Github",
    href: "https://github.com/Emilyuwu0",
    view: "",
  },
];
