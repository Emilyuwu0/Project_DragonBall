import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About/About";
import Characters from "./Characters/Characters";
import Planets from "./Planets/Planets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/personajes" element={<Characters />} />
      <Route path="/razas" element={<About />} />
      <Route path="/planetas" element={<Planets />} />
    </Routes>
  );
}

export default App;