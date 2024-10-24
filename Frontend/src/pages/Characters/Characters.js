import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hook/sizeScreen";
import { getData } from "../../api/characters";
import Character from "../../assets/Characters.webp";
import NavbarComponent from "../../components/Home/Hero/navbar";
import Footer from "../../components/Home/Footer";
import "./index.css";

export default function Characters() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [visibleCharacters, setVisibleCharacters] = useState(4); // Mostrar 4 personajes inicialmente

  const windowWidth = useWindowSize();
  const isMobile = windowWidth < 1300;

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      let allCharacters = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const data = await getData(page);
        if (data && Array.isArray(data.items)) {
          data.items.forEach((character) => {
            if (!allCharacters.some((c) => c.id === character.id)) {
              allCharacters.push(character);
            }
          });
          totalPages = data.meta.totalPages;
          page++;
        }
      }

      setCharacters(allCharacters);
      setFilteredCharacters(allCharacters); // Inicialmente muestra todos los personajes
      setLoading(false);
    };

    fetchAllCharacters();
  }, []);

  useEffect(() => {
    if (speciesFilter === "All") {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter(
        (character) =>
          character.race?.toLowerCase() === speciesFilter.toLowerCase()
      );
      setFilteredCharacters(filtered);
    }
    setVisibleCharacters(4); // Reinicia a 4 cuando cambia el filtro
  }, [speciesFilter, characters]);

  const handleSpeciesChange = (e) => {
    setSpeciesFilter(e.target.value);
  };

  const handleShowMore = () => {
    setVisibleCharacters((prev) =>
      Math.min(prev + 4, filteredCharacters.length)
    );
  };

  const handleRedirectItemCard = (id) => {
    navigate(`/card/${id}`);
  };
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.8, ease: "easeOut" };

  const variantsText = {
    hidden: { opacity: 0, y: 50 },
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
        {/* Header Section */}
        <div className="parents" id="about">
          <div className="content-parents border-div padding-max margin-top-characters flex-column-mobile">
            <div className="div-left">
              <span className="title-head-section">Personajes</span>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variantsText}
              >
                <h1 className="title-gradient-left titles-mobile ">
                  Personalidades

                </h1>{" "}
              </motion.div>
              <p className="subtitle-about">
                Presenta una rica variedad de personajes...
              </p>
            </div>
            <div className="div-right">
              <img src={Character} alt="Character" className="img-character" />
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}
        >
          <div className="parents" id="about">
            <div className="content-parents border-div padding-max">
              <div className="container-filter-principal">
                <div className="display-no-flex">
                  <h1 className="title-gradient-left titles-mobile center-text">
                    Lista de
                    <span className="highlight text-degrade"> Personajes</span>
                  </h1>

                  {isMobile ? (
                    <div className="container-filter-mobile">
                      <select
                        value={speciesFilter}
                        onChange={handleSpeciesChange}
                        className="select-planets"
                      >
                        <option value="All">Todos</option>
                        <option value="Saiyan">Saiyan</option>
                        <option value="Human">Humano</option>
                        <option value="Namekian">Namekiano</option>
                        <option value="Android">Android</option>
                        <option value="Frieza Race">Raza de Freezer</option>
                        <option value="Majin">Majin</option>
                        <option value="Angel">Ángel</option>
                        <option value="God">Dios</option>
                        <option value="Nucleico benigno">Otras</option>
                      </select>
                    </div>
                  ) : (
                    <div className="container-filter-principal">
                      <div className="container-filter-principal">
                        <div className="container-filter">
                          <div className="tabs-filter">
                            <input
                              type="radio"
                              id="radio-all"
                              name="species"
                              value="All"
                              checked={speciesFilter === "All"}
                              onChange={handleSpeciesChange}
                            />
                            <label className="tab-filter" htmlFor="radio-all">
                              Todos
                            </label>

                            <input
                              type="radio"
                              id="radio-saiyan"
                              name="species"
                              value="Saiyan"
                              checked={speciesFilter === "Saiyan"}
                              onChange={handleSpeciesChange}
                            />
                            <label
                              htmlFor="radio-saiyan"
                              className="tab-filter"
                            >
                              Saiyan
                            </label>

                            <input
                              type="radio"
                              id="radio-human"
                              name="species"
                              value="Human"
                              checked={speciesFilter === "Human"}
                              onChange={handleSpeciesChange}
                            />
                            <label className="tab-filter" htmlFor="radio-human">
                              Humano
                            </label>

                            <input
                              type="radio"
                              id="radio-namekian"
                              name="species"
                              value="Namekian"
                              checked={speciesFilter === "Namekian"}
                              onChange={handleSpeciesChange}
                            />
                            <label
                              className="tab-filter"
                              htmlFor="radio-namekian"
                            >
                              Namekiano
                            </label>

                            <input
                              type="radio"
                              id="radio-android"
                              name="species"
                              value="Android"
                              checked={speciesFilter === "Android"}
                              onChange={handleSpeciesChange}
                            />
                            <label
                              className="tab-filter"
                              htmlFor="radio-android"
                            >
                              Android
                            </label>

                            <input
                              type="radio"
                              id="radio-frieza"
                              name="species"
                              value="Frieza Race"
                              checked={speciesFilter === "Frieza Race"}
                              onChange={handleSpeciesChange}
                            />
                            <label
                              className="tab-filter"
                              htmlFor="radio-frieza"
                            >
                              Raza de Freezer
                            </label>

                            <input
                              type="radio"
                              id="radio-majin"
                              name="species"
                              value="Majin"
                              checked={speciesFilter === "Majin"}
                              onChange={handleSpeciesChange}
                            />
                            <label className="tab-filter" htmlFor="radio-majin">
                              Majin
                            </label>

                            <input
                              type="radio"
                              id="radio-angel"
                              name="species"
                              value="Angel"
                              checked={speciesFilter === "Angel"}
                              onChange={handleSpeciesChange}
                            />
                            <label className="tab-filter" htmlFor="radio-angel">
                              Angel
                            </label>

                            <input
                              type="radio"
                              id="radio-god"
                              name="species"
                              value="God"
                              checked={speciesFilter === "God"}
                              onChange={handleSpeciesChange}
                            />
                            <label className="tab-filter" htmlFor="radio-god">
                              Dios
                            </label>

                            <input
                              type="radio"
                              id="radio-other"
                              name="species"
                              value="Nucleico benigno"
                              checked={speciesFilter === "Nucleico benigno"}
                              onChange={handleSpeciesChange}
                            />
                            <label className="tab-filter" htmlFor="radio-other">
                              Otras
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Character List */}
                <div>
                  {loading ? (
                    <div className="container-filter-principal">
                      <div className="loader-container">
                        <span className="loader"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="container-list-characters">
                      {filteredCharacters
                        .slice(0, visibleCharacters)
                        .map((character) => (
                          <div
                            key={character.id}
                            className="item-list-character"
                          >
                            <div
                              className="card-characters-individual"
                              onClick={() =>
                                handleRedirectItemCard(character.id)
                              }
                            >
                              <img
                                src={`https://dragon-ball-api-k1tv.onrender.com${character.image}`}
                                className="image-characters"
                                alt={character.name}
                              />

                              <div className="card-info">
                                <div className="left-info">
                                  <span className="product-title">
                                    {character.name}
                                  </span>
                                  <p className="feature-sub-title">Raza:</p>
                                  <p>{character.race || "Desconocido"}</p>
                                </div>
                                <div className="right-info">
                                  <ul className="features-list">
                                    <li className="list-item">
                                      <p className="feature-sub-title">Ki:</p>
                                      <span className="feature-desc">
                                        <p>{character.ki}</p>
                                      </span>
                                    </li>
                                    <li className="list-item">
                                      <p className="feature-sub-title">
                                        Max Ki:
                                      </p>
                                      <span className="feature-desc">
                                        <p>
                                          {character.max_ki || character.ki}
                                        </p>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                  {visibleCharacters < filteredCharacters.length && (
                    <div className="show-more-container">
                      <button
                        className="button-colors"
                        onClick={handleShowMore}
                      >
                        Ver más
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
