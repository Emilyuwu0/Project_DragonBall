import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Series } from "./data-about";
import Akira from "../../assets/timeline.webp";
import NavbarComponent from "../../components/Home/Hero/navbar";
import Footer from "../../components/Home/Footer/index";

import "./index.css";
import "../../styles/App.css";

export default function Index() {
  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedItemZ, setSelectedItemZ] = useState(null);

  const [selectedItemGt, setSelectedItemGt] = useState(null);

  const [selectedItemSuper, setSelectedItemSuper] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };
  const handleClickZ = (item) => {
    setSelectedItemZ(item);
  };
  const handleClickGt = (item) => {
    setSelectedItemGt(item);
  };
  const handleClickSuper = (item) => {
    setSelectedItemSuper(item);
  };
  const closeModal = () => {
    setSelectedItem(null);
    setSelectedItemZ(null);
    setSelectedItemGt(null);
    setSelectedItemSuper(null);
  };
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 4 },
  };

  const transition = { duration: 0.8, ease: "easeOut" };

  const variantsText = {
    hidden: { opacity: 0, y: 50 }, // Empieza un poco más abajo
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <NavbarComponent />

      <div className="about-parent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}
        >
          <span className="title-head-section center-text margin-top-about ">
            Historia
          </span>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variantsText}
        >
          <h1 className="title-gradient-left titles-mobile center-text">
            Una Fusión de Mitología, <br /> Ciencia Ficción
            <span className="highlight text-degrade"> y Batallas Épicas</span>
          </h1>{" "}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}
        >
          <div className="framer-general">
            <h1 className="title-gradient-left titles-mobile center-text subtitle-info fade-in ">
              El Comienzo
              <span className="highlight text-degrade"> de una Leyenda </span>
            </h1>
            <div className="framer-divs-center">
              <div className="framer-left">
                <span className="title-head-section "> Contexto </span>
                <p className="subtitle-about">
                  <br />
                  <span className="font-white"> Dragon Ball </span>fue creado
                  por Akira Toriyama en 1984 como un manga. La historia se
                  inspira en la novela china Viaje al Oeste y sigue a Goku, un
                  niño con cola de mono que tiene habilidades extraordinarias.
                  Goku fue criado en las montañas por su abuelo adoptivo, Gohan,
                  quien le enseñó artes marciales.
                  <br /> <br />
                  <p>
                    {" "}
                    La trama comienza cuando Goku conoce a Bulma, una chica que
                    busca las Esferas del Dragón, siete objetos mágicos que, al
                    reunirse, convocan al dragón Shenron, capaz de conceder
                    cualquier deseo. <br />
                    <br />
                  </p>
                  A partir de ahí, Goku vive muchas aventuras, enfrentándose a
                  poderosos enemigos, haciendo nuevos amigos y entrenando para
                  volverse cada vez más fuerte.
                  <br />
                  <br />
                  Con el tiempo, la historia evoluciona hacia combates épicos y
                  la exploración de otros planetas, mientras Goku descubre su
                  origen extraterrestre como un Saiyajin, una raza de guerreros.
                </p>
              </div>
              <div>
                <img src={Akira} alt="Akira" className="img-about fade-in {" />
              </div>
            </div>{" "}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}
        >
          {/*  Dragon ball */}
          <div className="parents" id="about">
            <div className="content-parents border-div padding-max-about flex-column flex-column-mobile">
              <div className="div-left ">
                <span className="title-head-section "> 1986-1989</span>
                <h1 className="title-gradient-left titles-mobile">
                  Dragon
                  <span className="highlight text-degrade"> Ball</span>
                </h1>
                <p className="button-spacing subtitle-about margin-bottom-min margin-top-min">
                  Gokū, un niño con una cola de mono, en su aventura para
                  encontrar las Esferas del Dragón junto a Bulma. Durante el
                  camino, Gokū entrena en artes marciales, participa en torneos
                  y enfrenta a villanos como el Emperador Pilaf y Piccolo. La
                  serie mezcla acción, humor y aventuras.
                </p>
              </div>
              <div className="div-right padding-min">
                <div className="carousel-container">
                  <motion.div
                    className="carousel-wrapper {"
                    initial={{ y: 0 }}
                    animate={{ y: ["0%", "-100%"] }}
                    transition={{
                      ease: "linear",
                      duration: 10,
                      repeat: Infinity,
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
                            <Link className="button-plus-redirect">
                              Ver más
                            </Link>
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
                            <p className="title-of-saga">
                              {selectedItem.title}
                            </p>
                            <p className="subtitle-about number-of-saga margin-bottom-min">
                              {selectedItem.description}
                            </p>
                            <img
                              src={selectedItem.img}
                              alt="portada"
                              className="img-modal-portada"
                            />
                            <button
                              onClick={closeModal}
                              className="button-colors button-hero"
                            >
                              Cerrar
                            </button>
                          </div>
                        </div>
                      )}{" "}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}
        >
          {/* Dragon ball Z */}
          <div className="parents margin-top-about-mobile" id="about">
            <div className="content-parents border-div padding-max-about-z column-mobile  flex-column-reverse">
              <div className="div-left ">
                <div className="parent-cards-divs">
                  {" "}
                  {Series.filter((item) => item.saga === "Dragon Ball Z").map(
                    (item) => (
                      <>
                        <div
                          className="card-dbz"
                          onClick={() => handleClickZ(item)}
                        >
                          <div className="notiglow"></div>
                          <div className="notiborderglow"></div>
                          <span className="id-cards">{item.id}</span>
                          <p className="heading">{item.title}</p>
                          <Link className="button-plus-redirect-gz">
                            Ver más
                          </Link>
                        </div>
                      </>
                    )
                  )}
                </div>

                <AnimatePresence>
                  <motion.div onClick={(e) => e.stopPropagation()}>
                    {selectedItemZ && (
                      <div className="modal-overlay" onClick={closeModal}>
                        <div
                          className="modal-content"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <p className="title-of-saga">{selectedItemZ.title}</p>
                          <p className="subtitle-about number-of-saga margin-bottom-min">
                            {selectedItemZ.description}
                          </p>
                          <img
                            src={selectedItemZ.img}
                            alt="portada"
                            className="img-modal-portada"
                          />
                          <button
                            onClick={closeModal}
                            className="button-colors button-hero"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    )}{" "}
                  </motion.div>
                </AnimatePresence>

                {/* */}
              </div>
              <div className="div-right padding-min">
                <span className="title-head-section "> 1989-1996</span>
                <h1 className="title-gradient-left titles-mobile">
                  Dragon
                  <span className="highlight text-degrade"> Ball Z</span>
                </h1>
                <p className="button-spacing subtitle-about margin-bottom-min margin-top-min">
                  Sigue las aventuras de Gokū y los Guerreros Z mientras
                  defienden la Tierra de poderosos enemigos, como los Saiyajins,
                  Freezer, los Androides, Cell y Majin Buu. A lo largo de la
                  serie, los personajes enfrentan batallas épicas, alcanzan
                  nuevas transformaciones como el Super Saiyajin, y exploran
                  otros planetas y dimensiones, siempre luchando para proteger
                  al universo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}
        >
          {/* Dragon ball GT */}
          <div className="parents margin-top-about-mobile" id="about">
            <div className="content-parents border-div padding-max-about ">
              <div className=" ">
                <span className="title-head-section center-text">
                  {" "}
                  1996-1997
                </span>
                <h1 className="title-gradient-left titles-mobile center-text margin-bottom-min">
                  Dragon
                  <span className="highlight text-degrade"> Ball GT</span>
                </h1>
                <p className="button-spacing subtitle-about margin-bottom-min center-text margin-top-min">
                  Sigue las aventuras de Gokū y los Guerreros Z mientras
                  defienden la Tierra de poderosos enemigos, como los Saiyajins,
                  Freezer, los Androides, Cell y Majin Buu. A lo largo de la
                  serie, los personajes enfrentan batallas épicas, alcanzan
                  nuevas transformaciones como el Super Saiyajin, y exploran
                  otros planetas y dimensiones, siempre luchando para proteger
                  al universo.
                </p>
              </div>
              <div className="div-cards-gt padding-min">
                {Series.filter((item) => item.saga === "Dragon Ball GT").map(
                  (item) => (
                    <div
                      className="notification div-cards-gt notification-gt"
                      onClick={() => handleClickGt(item)}
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
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div onClick={(e) => e.stopPropagation()}>
            {selectedItemGt && (
              <div className="modal-overlay" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="title-of-saga">{selectedItemGt.title}</p>
                  <p className="subtitle-about number-of-saga margin-bottom-min">
                    {selectedItemGt.description}
                  </p>
                  <img
                    src={selectedItemGt.img}
                    alt="portada"
                    className="img-modal-portada"
                  />
                  <button
                    onClick={closeModal}
                    className="button-colors button-hero"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}{" "}
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}
        >
          {/* Dragon ball Super */}
          <div className="parents margin-top-about-mobile" id="about">
            <div className="content-parents border-div padding-max-about column-mobile flex-column-reverse">
              <div className="div-left ">
                <div className="super-div-principal">
                  {Series.filter(
                    (item) => item.saga === "Dragon Ball Super"
                  ).map((item) => (
                    <div
                      className="notification super-ball"
                      onClick={() => handleClickSuper(item)}
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
              </div>
              <div className="div-right padding-min">
                <span className="title-head-section ">2015-2018</span>
                <h1 className="title-gradient-left titles-mobile">
                  Dragon
                  <span className="highlight text-degrade"> Ball Super</span>
                </h1>
                <p className="button-spacing subtitle-about margin-bottom-min margin-top-min">
                  Tras la derrota de Majin Buu. La serie introduce nuevos
                  enemigos y aliados, como Bills, el Dios de la Destrucción, y
                  Goku Black, un misterioso villano. Gokū y Vegeta alcanzan
                  nuevas transformaciones, como el Super Saiyajin Blue y el
                  Ultra Instinto. Además, participan en el Torneo del Poder,
                  donde luchan por la supervivencia de su universo contra los
                  mejores guerreros de otros universos.
                </p>
              </div>
            </div>
          </div>{" "}
        </motion.div>
        <AnimatePresence>
          <motion.div onClick={(e) => e.stopPropagation()}>
            {selectedItemSuper && (
              <div className="modal-overlay" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="title-of-saga">{selectedItemSuper.title}</p>
                  <p className="subtitle-about number-of-saga margin-bottom-min">
                    {selectedItemSuper.description}
                  </p>
                  <img
                    src={selectedItemSuper.img}
                    alt="portada"
                    className="img-modal-portada"
                  />
                  <button
                    onClick={closeModal}
                    className="button-colors button-hero"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}{" "}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
