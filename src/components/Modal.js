import React, { useEffect } from 'react'
import gql from 'graphql-tag'
import { GAME_STATE, getTotalScore } from '../custom/utils'
import { useMutation } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'

const INSERT_FOB_GAME = gql`
  mutation InsertFobGame($points: numeric!, $user_id: uuid!) {
    insert_fob_game(objects: { points: $points, user_id: $user_id }) {
      returning {
        id
      }
    }
  }
`

const Modal = ({ gameState, groups, startGame, timeLeft, resetGame }) => {
  const [insertFobGame] = useMutation(INSERT_FOB_GAME)
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    const doInsertFobGame = async (groups, timeLeft) => {
      try {
        await insertFobGame({
          variables: {
            points: getTotalScore(groups, timeLeft),
            user_id: 'b3c9d557-5259-42c0-a171-f41eee95af35',
          },
        })
      } catch (e) {
        console.log('error', e)
      }
    }
    if (isAuthenticated && gameState !== GAME_STATE.READY) {
      doInsertFobGame(groups, timeLeft)
    }
  }, [gameState, isAuthenticated])

  return (
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
            {gameState === GAME_STATE.READY
              ? 'Byrja spælið'
              : 'Spæl av nýggjum'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
