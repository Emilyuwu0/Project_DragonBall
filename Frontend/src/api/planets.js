import { useState, useEffect } from "react";
export default function ApiDBZPlanets() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://dragonball-api.com/api/characters")
        .then((response) => response.json())
        .then((data) => setData(data.items)); // Guardar los datos en el estado local
    }, []);

    return (
      <div> 
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
      </div>
    )
}