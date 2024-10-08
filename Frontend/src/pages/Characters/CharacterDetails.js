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
            {" "}
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
          </div>
          <div className="div-right">
            {" "}
            <p>Raza: {character.race || "Desconocido"}</p>
            <p>Ki: {character.ki}</p>
            <p>Max Ki: {character.max_ki || character.ki}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
