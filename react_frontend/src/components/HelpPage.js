import React from "react";

/**
 * PUBLIC_INTERFACE
 * HelpPage component for Tic Tac Toe.
 * Explains rules, modes, and controls in a minimalistic and modern style.
 */
function HelpPage({ onBack }) {
  return (
    <div className="ttt-root" style={{ paddingTop: 32, paddingBottom: 32, minHeight: "100vh" }}>
      <div
        className="ttt-mode-selector"
        style={{
          maxWidth: 480,
          marginTop: 40,
          marginBottom: 24,
          background: "var(--bg-primary)",
        }}
      >
        <h1 className="ttt-title" style={{ fontSize: "2rem", marginBottom: 16 }}>
          How to Play Tic Tac Toe
        </h1>
        <section style={{ color: "var(--text-primary)", fontSize: "1.06rem", lineHeight: 1.6 }}>
          <h2 style={{
            fontSize: "1.14rem",
            color: "var(--ttt-primary)",
            marginTop: 0,
            marginBottom: 5,
            letterSpacing: ".03em"
          }}>Objective</h2>
          <p style={{ color: "var(--text-color, #333)" }}>
            Get three of your marks (“X” or “O”) in a row—horizontally, vertically, or diagonally—before your opponent does.
          </p>
          <h2 style={{
            fontSize: "1.14rem",
            color: "var(--ttt-primary)",
            marginBottom: 5
          }}>Game Modes</h2>
          <ul style={{ paddingLeft: 22, margin: 0, color: "var(--text-secondary, #606060)" }}>
            <li>
              <b>Player vs Player:</b> Two humans play against each other, taking turns.
            </li>
            <li>
              <b>Player vs Computer:</b> Play as “X” against a simple AI opponent.
            </li>
          </ul>
          <h2 style={{
            fontSize: "1.14rem",
            color: "var(--ttt-primary)",
            marginTop: 18,
            marginBottom: 5
          }}>Basic Rules</h2>
          <ul style={{ paddingLeft: 22, margin: 0, color: "var(--text-secondary, #606060)" }}>
            <li>Click an empty square to place your mark.</li>
            <li>Players take alternate turns. “X” always goes first.</li>
            <li>The first to get three in a row wins. If the grid fills and no one wins, it’s a draw.</li>
          </ul>
          <h2 style={{
            fontSize: "1.14rem",
            color: "var(--ttt-primary)",
            marginTop: 18,
            marginBottom: 5
          }}>Controls</h2>
          <ul style={{ paddingLeft: 22, margin: 0, color: "var(--text-secondary, #606060)" }}>
            <li>
              <b>Restart Game:</b> Use the <span className="ttt-btn" style={{ fontSize: "0.98em", padding: "2px 10px" }}>Restart Game</span> button to start over.
            </li>
            <li>
              <b>Change Mode:</b> Click <span className="ttt-btn ttt-mode-btn" style={{ fontSize: "0.98em", padding: "2px 10px" }}>Change Mode</span> to switch opponents or mode at any time.
            </li>
          </ul>
        </section>
        <button
          className="ttt-btn ttt-mode-btn"
          style={{ marginTop: 30, letterSpacing: ".04em" }}
          onClick={onBack}
        >
          Back to Game
        </button>
      </div>
    </div>
  );
}

export default HelpPage;
