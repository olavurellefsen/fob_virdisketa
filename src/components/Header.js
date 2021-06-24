import React from 'react';
// import LoginLogout from './LoginLogout'
import { GAME_STATE, getSeconds } from '../custom/utils';

const Header = ({ timeLeft, gameState, endGame, isUngroupedEmtpy }) => (
  <header className="navbar">
    {(gameState === GAME_STATE.PLAYING || gameState === GAME_STATE.REVIEW) && (
      <>
        <section style={{backgroundColor:'white',
                          opacity:0.8,
                          padding: '5px',
                          borderRadius: '10px'}}
        className="navbar-center text-error">{getSeconds(timeLeft)} sekundir eftir</section>
        <section className="navbar-center">
          {/* <LoginLogout /> */}
          {isUngroupedEmtpy &&  <button className="btn btn-default" onClick={endGame}>
            {gameState === GAME_STATE.PLAYING ? "Eftirmeting" : "Enda"}
          </button>}
        </section>
      </>
    )}
  </header>
);

export default Header;
