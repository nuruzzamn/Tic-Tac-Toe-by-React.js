import React from 'react'
import gameStateValue from './GameState'

const Reset = ({gameState, handleReset}) => {

    if (gameState === gameStateValue.inProgress){
        return
    }
  return (
    <button className='reset-button' onClick={handleReset}>Play again</button>
  )
}

export default Reset