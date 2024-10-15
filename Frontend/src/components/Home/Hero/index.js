import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Characters from "../../../pages/Characters/Characters";
import About from "../../../pages/About/About";
import GokuHero from "../../../assets/goku-hero.webp";
import useWindowSize from "../../../hook/sizeScreen";
import Planets from "../Planets";
import Esfera from "../../../assets/esfera.png";
import "./index.css";

export default function HeroIndex() {
  const windowWidth = useWindowSize();
  const isMobile = windowWidth < 788;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
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
          )}
        </div>
      </div>
      <div className="hero" ref={ref}>
        <div className="hero-content">
          <div className="column hero-text">
            <h1
              className="title-hero-text text-degrade"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Dragon <br />
              Ball
            </h1>
            <div className="line-hero"></div>

            <Link to="/about" className="button-colors button-hero">
              Demos un vistazo
            </Link>
          </div>
          <div className="column hero-image">
            <img src={GokuHero} alt="goku" />
          </div>
        </div>
      </div>
    </div>
  );
}
const header = [
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
/*   {
    id: 3,
    title: " Razas",
    href: "/razas",
    view: <Planets />,
  }, */
  {
    id: 4,
    title: " Planetas",
    href: "/planetas",
    view: <Planets />,
  },
];
