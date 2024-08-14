import React from 'react'
import "./ResultScreen.css"
import Button from '../Button/Button'

function ResultScreen({display, winner, btnOnClick, draw}) {

  const style = {
    display : display,
  }

  function findWinner (winner, draw){
    let winnerText = "";
    if (draw){
      winnerText = "No one won"
      return winnerText;
    }
    else{
      return winner == "X" ? "O won" : "X won";
    }
  }

  return (
    <div style={style} className="overlay">
      <div className='result-container'>
          <h3>{findWinner(winner, draw)}</h3>
          <Button text={'Restart'} onClick={btnOnClick}/>
      </div>
    </div>
    
  )
}

export default ResultScreen
