import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import "./index.css";

import { Link } from "react-router-dom";
export default function Planets() {
  const controls = useAnimation();
  const titleControls = useAnimation();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const element = document.getElementById("animate-planets");
    const titleElement = document.getElementById("animate-title");

    if (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 600, damping: 20 },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 60,
          transition: { type: "spring", stiffness: 600, damping: 20 },
        });
      }
    }

    // Animación específica para el H1
    if (titleElement) {
      const titleTop = titleElement.getBoundingClientRect().top;
      console.log("Title Position: ", titleTop); // Agregar este log

      if (titleTop < windowHeight) {
        titleControls.start({
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        });
      } else {
        titleControls.start({
          opacity: 0,
          y: 40,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        });
      }
    }
  };

  // Escucha el scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, titleControls]); // Asegúrate de actualizar ambos controladores

  return (
    <motion.div
      id="animate-planets"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1.9 }}
    >
      <div className="margin-planets-top ">
        {" "}
        <div className="parents ">
          <div className="filter-bg-shadow"></div>
          <div className="content-parents border-div padding-min ">
            <div className="div-left padding-min  ">
              <span className="title-head-section"> Planetas </span>
              <motion.div
                id="animate-title"
                initial={{ opacity: 0, y: 40 }}
                animate={titleControls}
                transition={{ duration: 1.5 }}
              >
                <h1 className="title-gradient-left titles-mobile">
                  Diversidad de <span className="text-degrade ">planetas</span>
                </h1>
              </motion.div>
              <p className="subtitle-about ">
                En el universo de "Dragon Ball", los planetas juegan un papel
                crucial en la narrativa y el desarrollo de los personajes. La
                serie, creada por Akira Toriyama, presenta una variedad de
                mundos, cada uno con sus propias características, habitantes y
                culturas.
              </p>
              <Link
                className="button-colors width-button-redirect "
                to="/planetas"
              >
                Ver todos los planetas →
              </Link>
            </div>
            <div className="div-right">
              <div className="div-planets">
                <div className="main">
                  <div className="randar-box">
                    <input
                      type="checkbox"
                      checked
                      className="randar-checkbox"
                    />
                    <div className="randar-top"></div>
                    <div className="randar-top-body"></div>
                    <div className="randar-content">
                      <div className="rander-ball"></div>
                      <div className="rander-ball"></div>
                      <div className="rander-ball"></div>
                      <div className="rander-ball"></div>
                      <div className="rander-pos"></div>
                    </div>
                  </div>
                </div>
                <p className="dragon-title">
                  {" "}
                  Radar del Dragón{" "}
                  <span className="title-color-primary">
                    ( ドラゴンレーダー)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
}
