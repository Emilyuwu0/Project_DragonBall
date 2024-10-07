import { useState, useEffect } from "react";

export default function Razejs() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://72c9-2800-e2-57f-f927-74b2-86e9-4517-bfcd.ngrok-free.app/characters")
        .then((response) => response.json())
        .then((data) => setData(data)); // Guardar los datos en el estado local
    }, []);

    return (
      <div>
        Hola
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
      </div>
    )
}