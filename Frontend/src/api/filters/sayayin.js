import { useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "./index.css";
import "../../styles/App.css";
export default function Sayayin() {
  const [dataSaya, setDataSaya] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?page=1&limit=15")
      .then((response) => response.json())
      .then((data) => {
        setDataSaya(data.items);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <span className="title-generic center-text">Personajes Saiyan</span>

      <div className="container">
        {dataSaya
          .filter((item) => item.race === "Saiyan")
          .map((item) => (
            <div key={item.id} className="card"></div>
          ))}
      </div>
    </div>
  );
}
