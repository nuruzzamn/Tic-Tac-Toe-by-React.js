import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const Board = () => {
  return (
    <div className='board'>
        <Tile />
        <Tile />
        <Tile />

        <Tile />
        <Tile />
        <Tile />

        <Tile />
        <Tile />
        <Tile />

        <Strike/>

    </div>
  )
}

export default Board