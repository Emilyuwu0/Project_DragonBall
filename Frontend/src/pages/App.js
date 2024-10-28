import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About/About";
import Characters from "./Characters/Characters";
import CharacterDetail from "./Characters/CharacterDetails";
import Planets from "./Planets/Planets";
import Race from "./Race/Race";
import { ScrollToTopButton } from "../components/Ui/ButtonScroll/ButtonScroll";
import Loading from "../components/Ui/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const loadContent = async () => {
 
      await new Promise((resolve) => setTimeout(resolve, 3000)); 
      setIsLoading(false);
    };

    loadContent();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/personajes" element={<Characters />} />
        <Route path="/razas" element={<Race />} />
        <Route path="/planetas" element={<Planets />} />
        <Route path="/card/:id" element={<CharacterDetail />} />
      </Routes>
      <ScrollToTopButton/>
    </>
  );
}

export default App;
