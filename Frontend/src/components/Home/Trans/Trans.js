import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import "./index.css";
import "../../../styles/Generic.css";

export default function Trans() {
  const [dataSaya, setDataSaya] = useState([]);

  useEffect(() => {
    fetch(
      "https://dragonball-api.com/api/characters?race=Saiyan&page=1&limit=4"
    )
      .then((response) => response.json())
      .then((data) => {
        setDataSaya(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="div-father">
      <span className="title-head-section margin-auto"> Ascendencias </span>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title-gradient titles-mobile">
          {" "}
          Descubre las diferentes <span className="text-degrade">
            razas
          </span>{" "}
        </h1>
      </motion.div>
      <p className="text-trans-description">
        Las distintas razas enriquecen el universo con su diversidad de poderes
        y culturas.
      </p>
      <div className="carousel">
        <div className="carousel-inner">
          <>
            {dataSaya.map((item) => (
              <div className="carousel-item">
                <motion.div
                  whileHover={{ scale: 0.9, rotate: 0 }}
                  whileTap={{ scale: 0.3, rotate: 0 }}
                >
                  <div className="card">
                    <div className="card-back">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="image-card"
                      />
                      <p className="center-text name-card-trans">{item.name}</p>
                      <span className="ki-text">{item.ki}</span>
                      <span className="race-text">{item.race}</span>
                    </div>
                  </div>{" "}
                </motion.div>
              </div>
            ))}

            {/*  <img src="/api/placeholder/50/50" alt="Novartis logo" class="logo"/>*/}
          </>
        </div>
      </div>
   {/*    <Link
        to="/razas"
        className="button-colors width-button-redirect margin-auto margin-bottom-min margin-top-min"
      >
        Ver mas →
      </Link> */}
    </div>
  );
}
