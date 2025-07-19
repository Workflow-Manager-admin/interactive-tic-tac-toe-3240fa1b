import React from "react";

/**
 * PUBLIC_INTERFACE
 * ModeSelector allows the user to choose between Player vs Player and Player vs Computer modes.
 * @param {Object} props
 * @param {string} props.selectedMode - Current selected mode.
 * @param {(mode: string) => void} props.onSelectMode - Callback for selecting a mode.
 */
function ModeSelector({ selectedMode, onSelectMode }) {
  return (
    <div className="ttt-mode-selector">
      <h2 className="ttt-mode-title">Choose Game Mode</h2>
      <div className="ttt-mode-options">
        <button
          className={`ttt-btn ttt-mode-btn${selectedMode === 'pvp' ? ' selected' : ''}`}
          onClick={() => onSelectMode('pvp')}
        >
          Player vs Player
        </button>
        <button
          className={`ttt-btn ttt-mode-btn${selectedMode === 'ai' ? ' selected' : ''}`}
          onClick={() => onSelectMode('ai')}
        >
          Player vs Computer
        </button>
      </div>
    </div>
  );
}

export default ModeSelector;
