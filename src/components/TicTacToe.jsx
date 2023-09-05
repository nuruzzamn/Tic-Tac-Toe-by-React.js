import React, { useState } from 'react'
import Board from './Board'

const TicTacToe = () => {
  const playerX = "X"
  const player0 = "O"

  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState(playerX)

  const onTileHandle= (index) =>{
    if (tiles[index] !== (null)){
      return
    }

  const newTiles = [...tiles]
  newTiles[index] = playerTurn
  setTiles(newTiles)    

  if (playerTurn === playerX){
    setPlayerTurn(player0)
  }else{
    setPlayerTurn(playerX)
  }
  }

  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Board tiles={tiles} onTileHandle={onTileHandle} playerTurn={playerTurn}/>
    </div>
  )
}

export default TicTacToe