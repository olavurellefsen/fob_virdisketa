import React, { useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import PopupHero from './PopupHero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiFishingBoat,GiHarborDock } from 'react-icons/gi'



const Dropzone = ({ isDropDisabled, heroes, id, endGame, gameState, color }) => {
  const [selectedHero, setSelectedHero] = useState("")
  return (
    <HeroContainerStyle>
      <div className="h3" style={{ marginTop: "20px", borderBottom: `${gameState === "review" ? `10px ${color} solid` : ""}` }}>{id}</div>
      {endGame && heroes.length === 0 && (
        <button className="btn btn-default" onClick={endGame}>
          Enda spælið
        </button>
      )}
      <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {(provided) => {
          return (
            <div
              className="menu hero-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {heroes.map(({ name, color, rank, icons, description }, index) => (
                <Hero key={name} name={name} icons={icons} description={description} index={index}
                  color={color} gameState={gameState} rank={rank}
                  selectedHero={selectedHero}
                  setSelectedHero={setSelectedHero}
                />
              ))}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </HeroContainerStyle>
  )
}
const Hero = ({ name, icons, color, rank, description, index, gameState,
  selectedHero, setSelectedHero }) => {
  return (
    <Draggable key={index} draggableId={name} index={index}>
      {(provided) => {
        return (
          <HeroStyle
            review={gameState === "review"}
            color={color}
            className="menu-item tile tile-centered center-column"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <FigureStyle
              style={{ backgroundColor: 'transparent' }}
              className="avatar tile-icon"
            >
            <IconStyle>
            {icons.map(i => (
              <FontAwesomeIcon icon={i} style={{ color: `black` }} />
            ))}
            </IconStyle>
            
              {/* <img
                src={`./hero_icons/${name
                  .toLowerCase()
                  .replaceAll(' ', '-')}.png`}
                alt={name}
              /> */}
            </FigureStyle>
            <LabelStyle onClick={() => {
              setSelectedHero(name)
            }} title={description} className="tile-content">{gameState === "review" ? `${rank}. ${name}` : name}</LabelStyle>
            {gameState === "review" &&
              <PopupHero name={name} rank={rank} description={description}
                selectedHero={selectedHero} setSelectedHero={setSelectedHero}
              />}
          </HeroStyle>
        )
      }}
    </Draggable>
  )
}

const FigureStyle = styled.div`
  flex-direction: row;
  display:flex;
  align-items: center;
  justify-content: center;
`
const IconStyle = styled.div`
  flex-direction: row;
  display:flex;
  align-items: center;
`
const LabelStyle = styled.div`
  flex-direction: row;
  display:flex;
  align-items: center;
`
const HeroContainerStyle = styled.div`
  max-width: 500px;
  min-width: 290px;
`
const HeroStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
   ${({ review, color }) =>
    review && color &&
    `
    background-color: ${color};
    color: white;

    `}
`
export default Dropzone
