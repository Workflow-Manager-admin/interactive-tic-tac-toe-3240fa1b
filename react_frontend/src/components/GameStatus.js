import React from "react";

/**
 * PUBLIC_INTERFACE
 * GameStatus shows current game message (turn, winner, draw).
 * @param {Object} props
 * @param {string} props.status - The status message.
 * @returns
 */
function GameStatus({ status }) {
  return (
    <div className="ttt-status">
      {status}
    </div>
  );
}

export default GameStatus;
