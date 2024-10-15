import React, { useEffect, useState } from "react";
import { getData } from "../../api/characters";
import Character from "../../assets/Characters.webp";
import NavbarComponent from "../../components/Home/Hero/navbar";
import Footer from "../../components/Home/Footer";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hook/sizeScreen";
import "./index.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [visibleCharacters, setVisibleCharacters] = useState(4); // Mostrar 4 personajes inicialmente
  const navigate = useNavigate();
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

  const handleSpeciesChange = (e) => {
    setSpeciesFilter(e.target.value);
    setVisibleCharacters(4); // Reiniciar el número de personajes visibles al cambiar de filtro
  };

  const handleShowMore = () => {
    setVisibleCharacters((prev) => prev + 4); // Mostrar 4 personajes más cada vez
  };

  const handleRedirectItemCard = (id) => {
    navigate(`/card/${id}`);
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
              <h1 className="title-gradient-left titles-mobile">
                Personalidades
                <span className="highlight text-degrade"> Dragon Ball</span>
              </h1>
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
                        <label htmlFor="radio-saiyan" className="tab-filter">
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
                        <label className="tab-filter" htmlFor="radio-namekian">
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
                        <label className="tab-filter" htmlFor="radio-android">
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
                        <label className="tab-filter" htmlFor="radio-frieza">
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
                          className="item-list-character"
                          key={character.id || character.name}
                        >
                          <div
                            className="card-characters-individual"
                            onClick={() =>
                              handleRedirectItemCard(character.id)
                            }
                          >
                            <img
                              src={`http://localhost:4000${character.image}`}
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
      </div>

      <Footer />
    </div>
  );
}
