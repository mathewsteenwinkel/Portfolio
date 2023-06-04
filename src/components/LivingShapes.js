import React, { useState, useEffect } from "react";

const LivingShapes = () => {
  const [configuration, setConfiguration] = useState(1);
  const [roundness, setRoundness] = useState(1);

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * combinations.length);
      const combination = combinations[index];

      setConfiguration(combination.configuration);
      setRoundness(combination.roundness);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="wrapper" data-configuration={configuration} data-roundness={roundness}>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
};

export default LivingShapes;