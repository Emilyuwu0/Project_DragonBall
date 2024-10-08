import React, { useEffect, useState } from "react";
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

  if (loading) return <div>Cargando...</div>;

  if (!character) return <div>No se encontró el personaje</div>;

  return (
    <div>
      <NavbarComponent />

      <div className="parents" id="about">
        <div className="content-parents border-div padding-max margin-top-characters">
          <div className="div-left">
            <div>
                
            </div>
            <span className="title-head-section ">Caracter</span>
            <h1 className="title-gradient-left titles-mobile">
              {character.name}
            </h1>
            <img src={character.image} alt={character.name} className="image-view-characters " />
            <p>Ki: {character.ki}</p>
            <p>Max Ki: {character.max_ki || character.ki}</p>
          </div>
          <div className="div-right">
            {" "}
            <p>{character.description}</p>
            <p>Raza: {character.race || "Desconocido"}</p>
          </div>
        </div>
      </div>
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
                          src={item.image}
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
    </div>
  );
}
