import React, { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import GameControls from "./components/GameControls";
import ModeSelector from "./components/ModeSelector";

// PUBLIC_INTERFACE
/**
 * Main entry for the Tic Tac Toe app.
 * Handles mode selection, board state, turn logic, winner checking, and minimalistic modern UI.
 */
function App() {
  // Mode: 'pick' (before game), 'pvp', 'ai'
  const [mode, setMode] = useState("pick");
  // State: 9 squares, 'X' (player 1) or 'O' (player 2/AI)
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

  // Simple AI: pick a random empty square
  function aiMove(currentSquares) {
    const empties = [];
    currentSquares.forEach((val, idx) => {
      if (!val) empties.push(idx);
    });
    if (empties.length === 0) return null;
    const choice = empties[Math.floor(Math.random() * empties.length)];
    return choice;
  }

  // Handle a cell click
  function handleSquareClick(idx) {
    if (!gameActive || squares[idx]) return;
    let nextSquares = squares.slice();
    nextSquares[idx] = isXNext ? "X" : "O";
    let maybeWinner = calculateWinner(nextSquares);
    let nextDraw = !maybeWinner && nextSquares.every(Boolean);

    setSquares(nextSquares);
    setIsXNext(!isXNext);
    setWinner(maybeWinner);
    setDraw(nextDraw);
    setGameActive(!maybeWinner && !nextDraw);

    // If after move it's AI's turn (mode === 'ai') and game should continue
    if (
      mode === "ai" &&
      !maybeWinner &&
      !nextDraw &&
      isXNext // If X just played, now O (AI)
    ) {
      // Artificial short pause for realism
      setTimeout(() => {
        const aiIdx = aiMove(nextSquares);
        if (aiIdx === null) return; // defensive
        let squaresAfterAi = nextSquares.slice();
        squaresAfterAi[aiIdx] = "O";
        let winnerAfterAi = calculateWinner(squaresAfterAi);
        let drawAfterAi = !winnerAfterAi && squaresAfterAi.every(Boolean);

        setSquares(squaresAfterAi);
        setIsXNext(true); // back to human X
        setWinner(winnerAfterAi);
        setDraw(drawAfterAi);
        setGameActive(!winnerAfterAi && !drawAfterAi);
      }, 375); // small delay for better UX
    }
  }

  // Start new/restart game
  function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameActive(true);
    setWinner(null);
    setDraw(false);
  }

  // On mode select: transition to that mode and reset/ready game
  function handleModeSelect(selectedMode) {
    setMode(selectedMode);
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameActive(true);
    setWinner(null);
    setDraw(false);
  }

  // Status message computed from state
  let status;
  if (mode === "pick") {
    status = "";
  } else if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = "It's a draw!";
  } else {
    if (mode === "ai" && !isXNext) {
      status = "Computer's turn...";
    } else {
      status = `Turn: ${isXNext ? "X" : "O"}`;
    }
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
        {mode === "pick" ? (
          <ModeSelector selectedMode={mode === "pick" ? undefined : mode} onSelectMode={handleModeSelect} />
        ) : (
          <>
            <GameStatus status={status} />
            <GameBoard
              squares={squares}
              onSquareClick={handleSquareClick}
              disabled={!gameActive || (mode === "ai" && !isXNext)}
            />
            <GameControls onRestart={restartGame} />
            <button
              className="ttt-btn ttt-mode-btn"
              style={{ marginTop: 10, fontSize: "1rem", opacity: 0.78 }}
              onClick={() => setMode("pick")}
            >
              Change Mode
            </button>
          </>
        )}
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
