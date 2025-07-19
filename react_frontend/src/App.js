import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import GameControls from "./components/GameControls";

// PUBLIC_INTERFACE
/**
 * Main entry for the Tic Tac Toe app.
 * Handles board state, turn logic, winner checking, and minimalistic modern UI.
 */
function App() {
  // State: 9 squares, 'X' (player 1) or 'O' (player 2)
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameActive, setGameActive] = useState(true);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  // Colors: from env or fallback to given specs
  const primary = process.env.REACT_APP_PRIMARY_COLOR || "#1976d2";
  const accent = process.env.REACT_APP_ACCENT_COLOR || "#e53935";
  const secondary = process.env.REACT_APP_SECONDARY_COLOR || "#f5f5f5";

  // Check for winner at every move
  function calculateWinner(squares) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // columns
      [0,4,8],[2,4,6] // diagonals
    ];
    for (let line of lines) {
      const [a,b,c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  // Handle a cell click
  function handleSquareClick(idx) {
    if (!gameActive || squares[idx]) return;
    const nextSquares = squares.slice();
    nextSquares[idx] = isXNext ? "X" : "O";
    const maybeWinner = calculateWinner(nextSquares);
    const nextDraw = !maybeWinner && nextSquares.every(Boolean);
    setSquares(nextSquares);
    setIsXNext(!isXNext);
    setWinner(maybeWinner);
    setDraw(nextDraw);
    setGameActive(!maybeWinner && !nextDraw);
  }

  // Start new/restart game
  function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameActive(true);
    setWinner(null);
    setDraw(false);
  }

  // Status message computed from state
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = "It's a draw!";
  } else {
    status = `Turn: ${isXNext ? "X" : "O"}`;
  }

  // Inline styles for theme injection
  const themeVars = {
    "--ttt-primary": primary,
    "--ttt-accent": accent,
    "--ttt-secondary": secondary,
  };

  return (
    <div className="App" style={themeVars}>
      <main className="ttt-root">
        <h1 className="ttt-title">Tic Tac Toe</h1>
        <GameStatus status={status} />
        <GameBoard
          squares={squares}
          onSquareClick={handleSquareClick}
          disabled={!gameActive}
        />
        <GameControls onRestart={restartGame} />
        <footer className="ttt-footer">
          <span>
            Minimalistic Tic Tac Toe &copy; {new Date().getFullYear()}
          </span>
        </footer>
      </main>
    </div>
  );
}

export default App;
