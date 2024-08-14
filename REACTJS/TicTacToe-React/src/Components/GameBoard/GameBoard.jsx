import React, { useState } from 'react'
import "./GameBoard.css"
import InputCell from '../CellInput/InputCell'

function GameBoard({ handleCellClick}) {





  return (
    <div className='cell-container'>
        <InputCell cellIndex={0} onClick={handleCellClick}/>
        <InputCell cellIndex={1} onClick={handleCellClick}/>
        <InputCell cellIndex={2} onClick={handleCellClick}/>
        <InputCell cellIndex={3} onClick={handleCellClick}/>
        <InputCell cellIndex={4} onClick={handleCellClick}/>
        <InputCell cellIndex={5} onClick={handleCellClick}/>
        <InputCell cellIndex={6} onClick={handleCellClick}/>
        <InputCell cellIndex={7} onClick={handleCellClick}/>
        <InputCell cellIndex={8} onClick={handleCellClick}/>
    </div>
  )
}

export default GameBoard
