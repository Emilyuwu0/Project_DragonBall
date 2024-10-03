import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion,useInView } from "framer-motion";
import GokuHero from "../../../assets/goku-hero.png";
import useWindowSize from "../../../hook/sizeScreen";
import Planets from "../Planets";
import "./index.css";

export default function HeroIndex() {
  const windowWidth = useWindowSize();
  const isMobile = windowWidth < 768;
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
            <>
              {header.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="title-hero-link-a"
                >
                  <span className="title-hero-link"> {item.title}</span>
                </Link>
              ))}
            </>
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
    title: "Inicio",
    href: "/about",
    view: <Planets />,
  },
  {
    id: 2,
    title: " Personajes",
    href: "/personajes",
    view: <Planets />,
  },
  {
    id: 3,
    title: " Razas",
    href: "/razas",
    view: <Planets />,
  },
  {
    id: 4,
    title: " Planetas",
    href: "/planetas",
    view: <Planets />,
  },
];
