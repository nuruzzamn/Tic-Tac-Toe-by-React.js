import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const Board = ({tiles, onTileHandle, playerTurn, stickerClass}) => {
  return (
    <div className='board'>
        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(0)} value={tiles[0]} className='right-border bottom-border top-border left-border'/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(1)} value={tiles[1]} className='right-border bottom-border top-border'/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(2)} value={tiles[2]} className='right-border bottom-border top-border'/>

        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(3)} value={tiles[3]} className='right-border left-border bottom-border'/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(4)} value={tiles[4]} className='bottom-border right-border'/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(5)} value={tiles[5]} className='right-border bottom-border'/>

        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(6)} value={tiles[6]} className='right-border left-border bottom-border'/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(7)} value={tiles[7]} className='bottom-border right-border'/>
        <Tile playerTurn={playerTurn} onClick={()=>onTileHandle(8)} value={tiles[8]} className='right-border bottom-border'/>

        <Strike stickerClass={stickerClass}/>

    </div>
  )
}

export default Board