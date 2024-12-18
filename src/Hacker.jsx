import React, { useState, useEffect } from 'react';

const RandomTextAnimation = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 40);

    setIntervalId(newIntervalId);
  };

  // Cleanup the interval on component unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <h3 onMouseOver={handleMouseOver} data-value="ABOUT ME" className='about'>
      About Me
    </h3>
  );
};

export default RandomTextAnimation;
