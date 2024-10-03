import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "../components/Home/About";
import HeroIndex from "../components/Home/Hero/index";
import Pjs from "../components/Home/Pj";
import Planets from "../components/Home/Planets";
import Trans from "../components/Home/Trans/Trans";
import Footer from "../components/Home/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
     <HeroIndex/>
      <About />
      <Pjs/>
      <Trans/>
      <Planets/>
      <Footer/>
    </div>
  );
}
