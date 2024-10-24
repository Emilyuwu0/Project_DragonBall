import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ArrowTop from "../../../assets/flecha-hacia-arriba.webp"
import './scrollToTopButton.css'; // Archivo CSS

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <motion.div  initial={{ opacity: 0, scale: 0 }} // Estado inicial (antes de aparecer)
        animate={{ opacity: 1, scale: 1 }}  // Estado animado (cuando aparece)
        exit={{ opacity: 0, scale: 0 }}     // Estado de salida (cuando desaparece)
        transition={{ duration: 0.5 }}  >
   <button onClick={scrollToTop} className="scroll-button">
          <img src={ArrowTop} className='scroll-icon' alt="Scroll to top" />
        </button>
        </motion.div>
     
      )}
    </div>
  );
};


