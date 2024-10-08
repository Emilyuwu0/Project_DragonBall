import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../components/Home/Footer";
import "./index.css";
import NavbarComponent from "../../components/Home/Hero/navbar";

export default function Planets() {
  const [tabs, setTabs] = useState([]); 
  const [selectedTab, setSelectedTab] = useState(null); 

  useEffect(() => {
    fetch("https://dragonball-api.com/api/planets")
      .then((response) => response.json())
      .then((data) => {
        setTabs(data.items); 
        setSelectedTab(data.items[0]); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
       <NavbarComponent/>
      <div className="parents margin-top-min margin-bottom-min" >
        <div className="content-parents border-div padding-max margin-top-planets">
          <div className="div-left ">
            {" "}
            <h1 className="title-gradient-left titles-mobile margin-top-min">
              Universo
              <span className="highlight text-degrade"> 7</span>
            </h1>
            <p className="subtitle-about margin-top-min">
              es uno de los doce universos en el multiverso de Dragon Ball y es
              el escenario principal de la serie. Este universo es conocido por
              su diversidad de planetas, razas y seres poderosos.
            </p>
          </div>
          <div className="div-right ">
            <main class="solar-system">
              <article class="solar-system__sun"></article>
              <section class="solar-system__mercury-trajectory">
                <article class="solar-system__mercury-trajectory__mercury"></article>
              </section>
              <section class="solar-system__venus-trajectory">
                <article class="solar-system__venus-trajectory__venus"></article>
              </section>
              <section class="solar-system__earth-trajectory">
                <article class="solar-system__earth-trajectory__earth"></article>
              </section>
              <section class="solar-system__mars-trajectory">
                <article class="solar-system__mars-trajectory__mars"></article>
              </section>
            </main>
          </div>
        </div>
      </div>

      <div className="parents margin-top-min">
        <div className="content-parents border-div padding-max">
          <div className="margin-div-universe">
            <span className="title-head-section center-text margin-bottom-min">
              Planetas
            </span>
            <p className="subtitle-about display-block center-text">
              Listado de planetas universo 7
            </p>
          </div>{" "}
          <div className="window">
            <nav className="nav-tab">
              <ul className="div-list-planets">
                {tabs.map((item) => (
                  <li
                    key={item.name}
                    className={`list-item-planets ${
                      item === selectedTab ? "selected" : ""
                    }`}
                    onClick={() => setSelectedTab(item)}
                  >
                    {`${item.name}`}
                    {item === selectedTab ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            <main className="main-tabs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab ? selectedTab.name : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedTab ? (
                    <div className="container-tabs-p">
                      <div className="column-p">
                        <p className="title-tabs-p">{selectedTab.name} </p>
                        <p>{selectedTab.description}</p>
                      </div>
                      <div className="column-p">
                        <img
                          src={selectedTab.image}
                          alt="planets"
                          className="image-planets"
                        />
                      </div>
                      {/*  */}
                    </div>
                  ) : (
                    <>
                      <p className="center-text">
                        No se ha seleccionado <br />
                        ningún planeta!{" "}
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
