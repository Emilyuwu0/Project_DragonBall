import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavbarComponent from "../../components/Home/Hero/navbar";
import { Link } from "react-router-dom";
import { Series } from "./data-about";
import Akira from "../../assets/R.png";
import Footer from "../../components/Home/Footer/index";

import "./index.css";
import "../../styles/App.css";

export default function Index() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <div className="about-parent">
      <NavbarComponent />
      <span className="title-head-section center-text margin-top-about ">

        Historia
      </span>
      <h1 className="title-gradient-left titles-mobile center-text">
        Una Fusión de Mitología, <br /> Ciencia Ficción
        <span className="highlight text-degrade"> y Batallas Épicas</span>
      </h1>
      <div className="framer-general">
        <h1 className="title-gradient-left titles-mobile center-text subtitle-info">
          El Comienzo
          <span className="highlight text-degrade"> de una Leyenda </span>
        </h1>
        <div className="framer-divs-center">
          <div className="framer-left">
            <span className="title-head-section "> Contexto </span>
            <p className="subtitle-about">
              <span className="font-white"> Dragon Ball </span>fue creado por
              Akira Toriyama en 1984 como un manga. La historia se inspira en la
              novela china Viaje al Oeste y sigue a Goku, un niño con cola de
              mono que tiene habilidades extraordinarias. Goku fue criado en las
              montañas por su abuelo adoptivo, Gohan, quien le enseñó artes
              marciales.
              <br />
              <br />
              La trama comienza cuando Goku conoce a Bulma, una chica que busca
              las Esferas del Dragón, siete objetos mágicos que, al reunirse,
              convocan al dragón Shenron, capaz de conceder cualquier deseo. A
              partir de ahí, Goku vive muchas aventuras, enfrentándose a
              poderosos enemigos, haciendo nuevos amigos y entrenando para
              volverse cada vez más fuerte.
              <br />
              <br />
              Con el tiempo, la historia evoluciona hacia combates épicos y la
              exploración de otros planetas, mientras Goku descubre su origen
              extraterrestre como un Saiyajin, una raza de guerreros.
            </p>
          </div>
          <div>
            <img src={Akira} alt="Akira" className="img-about" />
          </div>
        </div>
      </div>{" "}
      {/*  Dragon ball */}
      <div className="parents" id="about">
        <div className="content-parents border-div padding-max-about flex-column">
          <div className="div-left ">
            <span className="title-head-section "> 1986-1989</span>
            <h1 className="title-gradient-left titles-mobile">
              Dragon
              <span className="highlight text-degrade"> Ball</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min ">
              Gokū, un niño con una cola de mono, en su aventura para encontrar
              las Esferas del Dragón junto a Bulma. Durante el camino, Gokū
              entrena en artes marciales, participa en torneos y enfrenta a
              villanos como el Emperador Pilaf y Piccolo. La serie mezcla
              acción, humor y aventuras.
            </p>
          </div>
          <div className="div-right padding-min">
            <div className="carousel-container">
              <motion.div
                className="carousel-wrapper {"
                initial={{ y: 0 }}
                animate={{ y: ["0%", "-100%"] }} // Movimiento continuo
                transition={{
                  ease: "linear",
                  duration: 10, // Duración larga para un movimiento lento
                  repeat: Infinity, // Repetir infinitamente
                }}
              >
                <div className="super-div-principal">
                  {[...Series, ...Series]
                    .filter((item) => item.saga === "Dragon Ball")
                    .map((item) => (
                      <div
                        className="notification super-ball"
                        onClick={() => handleClick(item)}
                      >
                        <div className="notiglow"></div>
                        <div className="notiborderglow"></div>
                        <div className="notititle">
                          <span className="font-white title-cards  ">
                            {item.id}{" "}
                          </span>{" "}
                          {item.title}
                        </div>
                        <Link className="button-plus-redirect">Ver más</Link>
                      </div>
                    ))}
                </div>
              </motion.div>

              <AnimatePresence>
                <motion.div onClick={(e) => e.stopPropagation()}>
                  {selectedItem && (
                    <div className="modal-overlay" onClick={closeModal}>
                      <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="title-of-saga">{selectedItem.title}</p>
                        <p className="subtitle-about number-of-saga margin-bottom-min">
                          {selectedItem.description}
                        </p>
                        <button onClick={closeModal}>Cerrar</button>
                      </div>
                    </div>
                  )}{" "}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Dragon ball Z */}
      <div className="parents margin-top-about-mobile" id="about">
        <div className="content-parents border-div padding-max-about-z column-mobile  flex-column-reverse">
          <div className="div-left ">
            <div className="parent-cards-divs">
              {" "}
              {Series.filter((item) => item.saga === "Dragon Ball Z").map(
                (item) => (
                  <>
                    <div className="card-dbz">
                      <div className="notiglow"></div>
                      <div className="notiborderglow"></div>
                      <span className="id-cards">{item.id}</span>
                      <p className="heading">{item.title}</p>
                      <Link className="button-plus-redirect-gz">Ver más</Link>
                    </div>
                  </>
                )
              )}
            </div>

            {/* */}
          </div>
          <div className="div-right padding-min">
            <span className="title-head-section "> 1989-1996</span>
            <h1 className="title-gradient-left titles-mobile">
              Dragon
              <span className="highlight text-degrade"> Ball Z</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min ">
              Sigue las aventuras de Gokū y los Guerreros Z mientras defienden
              la Tierra de poderosos enemigos, como los Saiyajins, Freezer, los
              Androides, Cell y Majin Buu. A lo largo de la serie, los
              personajes enfrentan batallas épicas, alcanzan nuevas
              transformaciones como el Super Saiyajin, y exploran otros planetas
              y dimensiones, siempre luchando para proteger al universo.
            </p>
          </div>
        </div>
      </div>
      {/* Dragon ball GT */}
      <div className="parents margin-top-about-mobile" id="about">
        <div className="content-parents border-div padding-max-about ">
          <div className=" ">
            <span className="title-head-section center-text"> 1996-1997</span>
            <h1 className="title-gradient-left titles-mobile center-text margin-bottom-min">
              Dragon
              <span className="highlight text-degrade"> Ball GT</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min center-text margin-top-min">
              Sigue las aventuras de Gokū y los Guerreros Z mientras defienden
              la Tierra de poderosos enemigos, como los Saiyajins, Freezer, los
              Androides, Cell y Majin Buu. A lo largo de la serie, los
              personajes enfrentan batallas épicas, alcanzan nuevas
              transformaciones como el Super Saiyajin, y exploran otros planetas
              y dimensiones, siempre luchando para proteger al universo.
            </p>
          </div>
          <div className="div-cards-gt padding-min">
            {Series.filter((item) => item.saga === "Dragon Ball GT").map(
              (item) => (
                <div className="notification div-cards-gt">
                  <div className="notiglow"></div>
                  <div className="notiborderglow"></div>
                  <div className="notititle">
                    <span className="font-white title-cards  ">{item.id} </span>{" "}
                    {item.title}
                  </div>
                  <Link className="button-plus-redirect">Ver más</Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Dragon ball Super */}
      <div className="parents margin-top-about-mobile" id="about">
        <div className="content-parents border-div padding-max-about column-mobile flex-column-reverse">
          <div className="div-left ">
            <div className="super-div-principal">
              {Series.filter((item) => item.saga === "Dragon Ball Super").map(
                (item) => (
                  <div className="notification super-ball">
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle">
                      <span className="font-white title-cards  ">
                        {item.id}{" "}
                      </span>{" "}
                      {item.title}
                    </div>
                    <Link className="button-plus-redirect">Ver más</Link>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="div-right padding-min">
            <span className="title-head-section ">2015-2018</span>
            <h1 className="title-gradient-left titles-mobile">
              Dragon
              <span className="highlight text-degrade"> Ball Super</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min ">
              Tras la derrota de Majin Buu. La serie introduce nuevos enemigos y
              aliados, como Bills, el Dios de la Destrucción, y Goku Black, un
              misterioso villano. Gokū y Vegeta alcanzan nuevas
              transformaciones, como el Super Saiyajin Blue y el Ultra Instinto.
              Además, participan en el Torneo del Poder, donde luchan por la
              supervivencia de su universo contra los mejores guerreros de otros
              universos.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
