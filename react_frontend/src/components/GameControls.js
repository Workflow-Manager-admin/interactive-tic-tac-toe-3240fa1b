import React from "react";

/**
 * PUBLIC_INTERFACE
 * GameControls renders control buttons like "Restart".
 * @param {Object} props
 * @param {() => void} props.onRestart - Handler for restart.
 */
function GameControls({ onRestart }) {
  return (
    <div className="ttt-controls">
      <button className="ttt-btn" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default GameControls;
