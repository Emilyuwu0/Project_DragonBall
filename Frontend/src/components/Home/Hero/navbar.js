import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Characters from "../../../pages/Characters/Characters";
import Planets from "../../../pages/Planets/Planets";
import About from "../../../pages/About/About";
import useWindowSize from "../../../hook/sizeScreen";
import Esfera from "../../../assets/esfera.png";
export default function Navbar() {
  const windowWidth = useWindowSize();
  const isMobile = windowWidth < 768;
  const ref = useRef(null);

  return (
    <div className="banner-hero">
      <div className="header-content">
        {isMobile ? (
          <>
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn">
              <span></span>
            </label>
            <label htmlFor="active" className="close"></label>
            <div className="wrapper-mobile">
              <div className="menu-mobile">
                {header.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="nav-menu-mobile"
                  >
                    <span className="item-nav"> {item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <nav className="navbar-desktop">
              <div className="logo-icon">
                <Link to="/">
                  {" "}
                  <img src={Esfera} alt="logo" className="logo-image" />
                </Link>
              </div>
              <div className="nav-links">
                {header.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="title-hero-link-a"
                  >
                    <span className="title-hero-link"> {item.title}</span>
                  </Link>
                ))}
              </div>

              <a href="#" className="sign-up">
                +
              </a>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

<div className="banner-hero">
  <nav class="navbar">
    <div class="logo">
      <div class="logo-icon"></div>
      <span class="logo-text">Claud</span>
    </div>
    <div class="nav-links">
      <a href="#">COINS</a>
      <a href="#">SUPPORT</a>
      <a href="#">ABOUT</a>
      <a href="#">HOW IT WORKS?</a>
    </div>
    <a href="#" class="sign-up">
      SIGN UP
    </a>
  </nav>
</div>;
const header = [
  {
    id: 3,
    title: " Inicio",
    href: "/",
    view: "",
  },
  {
    id: 1,
    title: "Información",
    href: "/about",
    view: <About />,
  },
  {
    id: 2,
    title: " Personajes",
    href: "/personajes",
    view: <Characters />,
  },
  /*  */
  {
    id: 4,
    title: " Planetas",
    href: "/planetas",
    view: <Planets />,
  },
];
