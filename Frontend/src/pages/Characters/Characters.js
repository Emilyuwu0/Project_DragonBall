import React, { useEffect, useState } from "react";
import { getData } from "../../api/characters";
import Character from "../../assets/Characters.png";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";


export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [selectedItemCharact, setSelectedItemCharact] = useState(null);

  // Obtener todos los personajes (sin paginación)
  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      let allCharacters = [];
      let page = 1;
      let totalPages = 1;

      // Continuar haciendo requests hasta obtener todas las páginas
      while (page <= totalPages) {
        const data = await getData(page);
        if (data && Array.isArray(data.items)) {
          allCharacters = [...allCharacters, ...data.items];
          totalPages = data.meta.totalPages;
          page++;
        }
      }

      setCharacters(allCharacters);
      setLoading(false);
    };

    fetchAllCharacters();
  }, []);

  // Filtrar personajes basado en el filtro seleccionado
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
  }, [speciesFilter, characters]);

  const handleSpeciesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeciesFilter(e.target.value);
  };

  const handleClickCharact = (item) => {
    setSelectedItemCharact(item);
  };

  const closeModalCharact = () => {
    setSelectedItemCharact(null);
  };

  return (
    <div>
      <div className="about-parent">
        <div className="parents" id="about">
          <div className="content-parents border-div padding-max">
            <div className="div-left">
              {" "}
              <span className="title-head-section">Personajes</span>
              <h1 className="title-gradient-left titles-mobile">
                Personalidades
                <span className="highlight text-degrade"> Dragon Ball</span>
              </h1>
              <p className="subtitle-about ">
                Presenta una rica variedad de personajes, centrándose en Goku,
                un guerrero Saiyajin que busca volverse más fuerte. Entre sus
                aliados se encuentran Bulma, Krillin y Piccolo. Los
                antagonistas, como Frieza y Cell, son villanos poderosos que
                desafían a Goku. La serie destaca por la evolución y las
                interacciones de estos personajes a lo largo de la
                historia.presenta una rica variedad de personajes, centrándose
                en Goku, un guerrero Saiyajin que busca volverse más fuerte.
                Entre sus aliados se encuentran Bulma, Krillin y Piccolo. Los
                antagonistas, como Frieza y Cell, son villanos poderosos que
                desafían a Goku. La serie destaca por la evolución y las
                interacciones de estos personajes a lo largo de la historia.
              </p>
            </div>
            <div className="div-right"> 

              <img src={Character}/>
            </div>
          </div>
        </div>

        <div className="parents" id="about">
          <div className="content-parents border-div padding-max">
          <h1 className="title-gradient-left titles-mobile center-text">
                Lista de 
                <span className="highlight text-degrade"> Personajes</span>
              </h1>

<div>


            <label htmlFor="species">Filtrar por raza: </label>
            <select
              id="species"
              value={speciesFilter}
              onChange={handleSpeciesChange}
            >
              <option value="All">Todos</option>
              <option value="Saiyan">Saiyan</option>
              <option value="Human">Humano</option>
              <option value="Namekian">Namekiano</option>
              <option value="Android">Android</option>
              <option value="Frieza Race">Raza de Freezer</option>
              <option value="Majin">Majin</option>
              <option value="Angel">Angel</option>
              <option value="God">Dios</option>
              <option value="Nucleico benigno">Otras</option>
            </select>
</div>
            <div className="container-list-characters">
              {loading ? (
                <div className="div-center-loading">
                  <span className="loader"></span>
                </div>
              ) : (
                filteredCharacters.map((character) => (
                  <div
                    className="item-list-character"
                    key={character.id || character.name}
                  >
                    <div
                      className="card-characters-individual"
                      onClick={() => handleClickCharact(character)}
                    >
                      <img
                        src={character.image}
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
                              <p className="feature-sub-title">Max Ki:</p>
                              <span className="feature-desc">
                                <p>{character.max_ki || character.ki}</p>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <AnimatePresence>
            {selectedItemCharact && (
              <motion.div
                className="modal-overlay"
                onClick={closeModalCharact}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <p className="title-of-saga">{selectedItemCharact.name}</p>
                  <p className="subtitle-about number-of-saga margin-bottom-min">
                    {selectedItemCharact.description}
                  </p>
                  <button onClick={closeModalCharact}>Cerrar</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
