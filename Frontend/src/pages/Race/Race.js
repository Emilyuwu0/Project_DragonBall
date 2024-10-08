import { useState, useEffect } from "react";
import { getDataNotPage } from "../../api/characters";
import NavbarComponent from "../../components/Home/Hero/navbar";
import "./index.css";

export default function Razejs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Comienza a cargar
      const result = await getDataNotPage();
      if (result) {
        setData(result); // Si hay datos, actualiza el estado
      } else {
        setError("No se pudieron cargar los datos");
      }
      setLoading(false); // Finaliza la carga
    };

    fetchData();
  }, []); // El array vacío significa que esto se ejecutará solo una vez al montarse el componente

  if (loading) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Mostrar un mensaje de error
  }

  return (
    <div>
      <NavbarComponent />
      <div className="parents margin-top-race" id="about">
        <div className="content-parents border-div padding-max">
          <div className="div-left">
            imagen xd
          </div>

          <div className="div-right">
            <h1 className="title-gradient-left titles-mobile center-text">
              Distintas
              <span className="highlight text-degrade"> razas</span>
            </h1>
          </div>
        </div>
      </div>
      asdasd
      {data &&
        data.items.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
    </div>
  );
}
