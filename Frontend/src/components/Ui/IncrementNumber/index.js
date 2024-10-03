import { useState, useEffect } from 'react';

const IncrementingNumber = ({ targetNumber }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let startNumber = 0;
    const duration = 2000; // Duración de la animación en milisegundos
    const startTime = performance.now();

    const animateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newNumber = Math.floor(progress * targetNumber);
      setNumber(newNumber);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [targetNumber]);

  return (
    <div>
      <span className='number-info'>{number}</span>
    </div>
  );
};

export default IncrementingNumber;
