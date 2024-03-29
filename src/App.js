import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { HEROES, COMICS } from './custom/data';
import { shuffle, getTimeLeft, move, GAME_STATE } from './custom/utils';
import Modal from './components/Modal';
import Header from './components/Header';
import Dropzone from './components/Dropzone';
import Footer from './components/Footer';
import Highscore from './components/Highscore';
import styled from 'styled-components';
import { media } from './utils/mediaTemplate'

const GAME_DURATION = 4000 * 60 * 2; // 2 minutes

const initialState = {
  // we initialize the state by populating the bench with a shuffled collection of heroes
  Óflokkað: shuffle(HEROES),
  [COMICS.DC]: [],
  [COMICS.MARVEL]: [],
  gameState: GAME_STATE.READY,
  timeLeft: 0,
};

class App extends React.Component {
  state = initialState;

  startGame = () => {
    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        gameState: GAME_STATE.PLAYING,
        timeLeft: getTimeLeft(this.currentDeadline),
      },
      this.gameLoop
    );
  };

  gameLoop = () => {
    this.timer = setInterval(() => {
      const timeLeft = getTimeLeft(this.currentDeadline);
      const isTimeout = timeLeft <= 0;
      if (isTimeout && this.timer) {
        clearInterval(this.timer);
      }

      this.setState({
        timeLeft: isTimeout ? 0 : timeLeft,
        ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
      });
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.state.gameState === GAME_STATE.PLAYING){
      this.setState({
        gameState: GAME_STATE.REVIEW
      });
    } else {
      this.setState({
        gameState: GAME_STATE.DONE
      });
    }
  };

  resetGame = () => {
    this.setState(initialState);
  };

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState(state => {
      return move(state, source, destination);
    });
  };

  render() {
    const { gameState, timeLeft, Óflokkað, ...groups } = this.state;
    const isDropDisabled = gameState === GAME_STATE.DONE || gameState === GAME_STATE.REVIEW;

    return (
      <>
      <Background src='/background/IMG_1061.jpg'/>
        <Header gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} isUngroupedEmtpy={Óflokkað.length === 0}/>
        {(this.state.gameState !== GAME_STATE.PLAYING && this.state.gameState !== GAME_STATE.REVIEW) && (
          <Modal
            startGame={this.startGame}
            resetGame={this.resetGame}
            timeLeft={timeLeft}
            gameState={gameState}
            groups={groups}
          />
        )}
        {(this.state.gameState === GAME_STATE.PLAYING ||
          this.state.gameState === GAME_STATE.REVIEW ||
          this.state.gameState === GAME_STATE.DONE) && (
            <>
            <TitleStyle>Drag ymisku liðini í kassarnar og set í rætta raðfylgju.</TitleStyle>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <FlexContainer>
                  <FlexColumn >
                    <Dropzone
                      id={COMICS.MARVEL}
                      color="olive"
                      heroes={this.state[COMICS.MARVEL]}
                      isDropDisabled={isDropDisabled}
                      gameState={gameState}

                    />
                    <Dropzone id="Óflokkað" heroes={Óflokkað} isDropDisabled={isDropDisabled} endGame={this.endGame} gameState={gameState} />
                    <Dropzone
                      id={COMICS.DC}
                      color="steelblue"
                      heroes={this.state[COMICS.DC]}
                      isDropDisabled={isDropDisabled}
                      gameState={gameState}
                    />
                  </FlexColumn>
                </FlexContainer>
              </DragDropContext>
              <Highscore />
            </>
          )}
        <Footer />
      </>
    );
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

const Background = styled.img`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index:-1;
`
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: stretch;
`

const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${media.desktop3`
    flex-direction: column;
  `}
`

const TitleStyle = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  color:white;
`
export default App;
