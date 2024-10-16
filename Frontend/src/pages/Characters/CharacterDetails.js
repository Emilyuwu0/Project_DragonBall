import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { getData } from "../../api/characters"; // Asegúrate de que esta función obtenga los datos de un personaje por ID
import NavbarComponent from "../../components/Home/Hero/navbar";

export default function CharacterDetail() {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const data = await getData(); // Asegúrate de que esta función pueda obtener los datos
      const selectedCharacter = data.items.find((char) => char.id === id); // Encuentra el personaje por ID
      setCharacter(selectedCharacter);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading)
    return (
      <div className="container-filter-principal">
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      </div>
    );

  if (!character) return <div>No se encontró el personaje</div>;

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.8, ease: "easeOut" };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={transition}
        variants={variants}
      >
        <NavbarComponent />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={transition}
        variants={variants}
      >
        <div className="parents" id="about">
          <div className="content-parents border-div padding-max margin-top-characters">
            <div className="div-left flex-wrap-character">
              <span className="title-head-section ">Caracter</span>
              <h1 className="title-gradient-left titles-mobile">
                {character.name}
              </h1>
              <img
                src={`http://localhost:4000${character.image}`}
                alt={character.name}
                className="image-view-characters "
              />
            </div>
            <div className="div-right flex-wrap-character">
              <div className="items-for-character ">
                <h2 className="margin-bottom-min">Detalles</h2>
                <p className="subtitle-about">{character.description}</p>

                <p>Raza: {character.race || "Desconocido"}</p>
                <p>Genero: {character.gender}</p>
                <p>Ki: {character.ki}</p>
                <p>Max Ki: {character.max_ki || character.ki}</p>
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
        <div>
          {character.transformations && character.transformations.length > 0 ? (
            <div className="parents" id="about">
              <div className="content-parents border-div padding-max  center-cards-trans">
                <div>
                  <h1 className="title-gradient-left titles-mobile center-text">
                    Tranforma
                    <span className="highlight text-degrade">ciones </span>
                  </h1>
                </div>
                <div className="cards-tranfors">
                  {character.transformations.map((item) => (
                    <div className="card-trans">
                      <div className="main-content">
                        <div className="header-cards">
                          <img
                            src={`http://localhost:4000/assets/transformations/${item.image}`}
                            className="image-characters"
                            alt={item.name}
                          />
                        </div>
                        <p className="heading">{item.name}</p>
                      </div>
                      <div className="footer">{item.ki}</div>
                    </div>
                  ))}
                </div>
              </div>{" "}
            </div>
          ) : (
            <></>
          )}
        </div>
      </motion.div>
    </div>
  );
}
