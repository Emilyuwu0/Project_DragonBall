import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import IncrementingNumber from "../../Ui/IncrementNumber";
import "./index.css";
import "../../../styles/App.css";

export default function Index() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const element = document.getElementById("animate-me");
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
      setIsVisible(true); // Cambiar el estado a visible
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
      setIsVisible(false); // Cambiar el estado a no visible
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dataInfo = [
    { id: 1, item: 6, title: "Series divididas." },
    { id: 2, item: 20, title: "Sagas oficiales." },
    { id: 3, item: 27, title: "Peliculas oficiales." },
    { id: 4, item: 300, title: "Personajes aprox." },
  ];

  return (
    <div className="about-parent">
      <motion.div
        id="animate-me"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1.9 }}
      >
        <div className="framer-blur"></div>
        <div className="parents" id="about">
          <div className="content-parents border-div padding-max">
            <div className="div-left ">
              <span className="title-head-section "> Historia </span>
              <h1 className="title-gradient-left titles-mobile">
                Indaga en la
                <span className="highlight text-degrade"> información</span>
              </h1>
              <p className="button-spacing subtitle-about margin-bottom-min subtitle-about-mobile  ">
                Es una popular serie de manga y anime creada por Akira Toriyama.
                La historia sigue las aventuras de Goku, un guerrero con
                habilidades sobrehumanas, mientras busca las Esferas del Dragón,
                objetos mágicos que pueden invocar a un dragón que concede
                deseos.
              </p>
              <Link className="view-redirect margin-top-min button-colors" to="/about">
                Quiero saber más →
              </Link>
            </div>
            <div className="div-right padding-min">
              <div className="card-into-about">
                <div className="div-flex-about">
                  {dataInfo.map((item) => (
                    <motion.div
                      key={item.id} // Aquí moví el key para estar en el motion.div
                      initial={{ scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <div className="div-item ">
                        <span className="number-info">
                          <IncrementingNumber
                            targetNumber={isVisible ? item.item : 0}
                          />
                          {/* Cambiamos a 0 si no está visible */}
                        </span>
                        <div className="line-info"></div>
                        <span className="name-info-data subtitle-about">
                          {item.title}{" "}
                        </span>{" "}
                      </div>
                    </motion.div>
                  ))}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
