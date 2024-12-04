import React, { useEffect } from 'react';


const GodotGame = () => {
  useEffect(() => {
    // Create the canvas dynamically
    const canvas = document.createElement('canvas');
    canvas.id = 'godot-canvas';
    document.getElementById('godot-container').appendChild(canvas);

    // Create a script tag to load the Godot JS file
    const script = document.createElement('script');
    script.src = '/FirstGame.js';  // Path to the Godot JavaScript file in the public directory
    script.type = 'module';

    // Once the script is loaded, initialize the game
    script.onload = () => {
      if (window.init) {
        window.init({
          canvas: document.getElementById('godot-canvas'),
          gameFile: '/FirstGame.pck',  // Path to the Godot PCK file in the public directory
        });
      } else {
        console.error("init function is not available in the loaded script.");
      }
    };

    document.body.appendChild(script);

    // Cleanup when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="godot-container" />;
};

export default GodotGame;
