import React from 'react'
import "./ResultScreen.css"
import Button from '../Button/Button'

function ResultScreen({display, winner, btnOnClick, draw}) {

  const style = {
    display : display,
  }

  // function findWinner (winner, draw){
  //   let winner = "";
  //   if (draw){
  //     winner = "No one won"
  //   }
  //   else if (winner)
  // }

  return (
    <div style={style} className="overlay">
      <div className='result-container'>
          <h3></h3>
          <Button text={'Restart'} onClick={btnOnClick}/>
      </div>
    </div>
    
  )
}

export default ResultScreen
