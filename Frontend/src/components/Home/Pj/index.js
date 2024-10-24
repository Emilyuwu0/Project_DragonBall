import React, { useState, useEffect, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import "./index.css";
import "../../../styles/Generic.css";

const CharacterCard = memo(({ character }) => {
  return (
    <motion.div
      animate={{
        x: 0,
        y: -4,
        scale: 0.6,
        rotate: 0,
      }}
    >
      <div className="item-pj-card">
        <div className="item-one-pj">
          <span className="title-pj-data">{character.name}</span>
          <span className="div-info-pj-data description-pj-data">
            {character.ki}
            <br />
            {character.race}
          </span>
        </div>
        <div className="info-name-pj">
          <div className="main-content-img">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.2, rotate: 0 }}
            >
              <img
                src={character.image}
                alt={character.name}
                className="image-card-pj"
                loading="lazy"
              />{" "}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const TabContent = memo(({ data }) => {
  return (
    <div className="parent-divs-characters">
      {data.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
});

const Tab = memo(({ active, onClick, data }) => {
  return (
    <div className="card-tab">
      <a onClick={onClick} className={active ? "active" : ""}>
        {data.map((character) => (
          <div key={character.id}>
            <div className="display-flex-card">
              <div className="home-experts_grid-number">{character.id}</div>
              <h2 className="title-card-info-data">{character.name}</h2>
            </div>
            <p className="description-pj">{character.description}</p>
          </div>
        ))}
      </a>
    </div>
  );
});

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const titleControls = useAnimation();

  // Fetch de datos
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setData(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Manejo del scroll para animar el div general
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const element = document.getElementById("animate-medium");
    const titleElement = document.getElementById("animate-title");

    if (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 600, damping: 20 },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 60,
          transition: { type: "spring", stiffness: 600, damping: 20 },
        });
      }
    }

    // Animación específica para el H1
    if (titleElement) {
      const titleTop = titleElement.getBoundingClientRect().top;

      if (titleTop < windowHeight) {
        titleControls.start({
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        });
      } else {
        titleControls.start({
          opacity: 0,
          y: 40,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        });
      }
    }
  };

  // Escucha el scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, titleControls]); // Asegúrate de actualizar ambos controladores

  const getTabData = (tabIndex) => {
    const start = (tabIndex - 1) * 1;
    const end = start + 1;
    return data.slice(start, end);
  };

  return (
    <div className="pj-parents">
      <motion.div
        id="animate-medium"
        initial={{ opacity: 0, y: 80 }} // Estado inicial
        animate={controls} // Control de animaciones
        transition={{ duration: 1.9 }}
      >
        <div className="framer-blur-pj-div">
          <div className="framer-blur-pj"></div>
        </div>
        <div className="tabs-pj">
          <div className="tabs">
            <span className="title-head-section-centered center-text">
              Personajes
            </span>
            <div>
              <motion.div
                id="animate-title"
                initial={{ opacity: 0, y: 40 }}
                animate={titleControls}
                transition={{ duration: 1.5 }}
              >
                <h1 className="title-gradient center-text titles-mobile">
                  Conoce a fondo todos
                  <br /> los
                  <span className="highlight text-degrade"> personajes</span>
                </h1>
              </motion.div>
              <p className="subtitle text-trans-description">
                Aparecen personajes que van desde guerreros extraterrestres
                hasta dioses y seres cósmicos, <br />
                en un universo lleno de batallas épicas, humor y lecciones de
                superación.
              </p>
            </div>
            <div className="parents flex-column">
              <div className="div-right">
                <div className="tabs-info">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    ["tab1", "tab2", "tab3", "tab4"].map((tab, index) =>
                      activeTab === tab ? (
                        <TabContent key={tab} data={getTabData(index + 2)} />
                      ) : null
                    )
                  )}
                </div>
              </div>
              <div className="div-left">
                <div className="tabs-container-pj">
                  {["tab1", "tab2", "tab3", "tab4"].map((tab, index) => (
                    <Tab
                      key={tab}
                      active={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                      data={getTabData(index + 2)}
                    />
                  ))}
                  <Link
                    to="/personajes"
                    className="left-bottom button-colors width-button-redirect"
                  >
                    Necesito conocer más →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
