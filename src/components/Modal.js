import React from 'react';

import { GAME_STATE, getTotalScore } from '../custom/utils';

const Modal = ({ gameState, groups, startGame, timeLeft, resetGame }) => (
  <div className="modal modal-sm active">
    <div className="modal-overlay" />
    <div className="modal-container">
      <div className="modal-header">
        <div className="modal-title h4">Virðisketur</div>
      </div>
      <div className="modal-body">
        <div className="content h6">
          {' '}
          {gameState === GAME_STATE.READY
            ? `Hála og slepp ymiska virksemið til virðisketuna hjá antin fiskivinnuni ella alivinnuni. Legg í rætta rekkjufylgju fyri at fáa fleiri stig.`
            : `Tú fekk: ${getTotalScore(groups, timeLeft)} stig`}
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-primary"
          onClick={gameState === GAME_STATE.READY ? startGame : resetGame}
        >
          {gameState === GAME_STATE.READY ? 'Byrja spælið' : 'Spæl av nýggjum'}
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
