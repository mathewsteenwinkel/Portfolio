import React, { useEffect, useRef } from "react";
import "../src/css/Mouse.css";

const Mouse = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      const dot = dotRef.current;
      if (dot) {
        dot.style.left = `${clientX}px`;
        dot.style.top = `${clientY}px`;
      }
    };

    // Add pointer move listener
    document.body.addEventListener("pointermove", handlePointerMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div>
      <div id="dot" ref={dotRef}></div>
    </div>
  );
};

export default Mouse;
