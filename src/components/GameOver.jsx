import React from 'react'
import gameStateValue from './GameState'

const GameOver = ({gameState}) => {
    switch (gameState) {
        case gameStateValue.inProgress:
            return <></>

        case gameStateValue.player0win:
        return <div className='game-over'> 0 Win </div>

        case gameStateValue.playerXwins:
        return <div className='game-over'> X Win </div>

        case gameStateValue.draw:
        return <div className='game-over'> Draw </div>
    
        default:
            return <></>
    }
}

export default GameOver