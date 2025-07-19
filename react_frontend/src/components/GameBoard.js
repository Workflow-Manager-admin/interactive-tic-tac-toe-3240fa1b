import React from "react";

/**
 * PUBLIC_INTERFACE
 * GameBoard component renders the 3x3 grid and handles clicks on squares.
 * @param {Object} props
 * @param {Array} props.squares - Array of 9 ("X", "O", or null) for the cells.
 * @param {(idx: number) => void} props.onSquareClick - Callback when a square is clicked.
 * @param {boolean} props.disabled - If true, disables interaction.
 */
function GameBoard({ squares, onSquareClick, disabled }) {
  return (
    <div className="ttt-board">
      {squares.map((value, idx) => (
        <button
          key={idx}
          className="ttt-cell"
          onClick={() => onSquareClick(idx)}
          disabled={!!value || disabled}
          aria-label={`cell ${idx + 1}, ${value ? value : "empty"}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default GameBoard;
