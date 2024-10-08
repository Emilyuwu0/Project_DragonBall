import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About/About";
import Characters from "./Characters/Characters";
import CharacterDetail from "./Characters/CharacterDetails";
import Planets from "./Planets/Planets";
import Race from "./Race/Race";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/personajes" element={<Characters />} />
      <Route path="/razas" element={<Race />} />
      <Route path="/planetas" element={<Planets />} />
      <Route path="/card/:id" element={<CharacterDetail />} />
    </Routes>
  );
}

export default App;
