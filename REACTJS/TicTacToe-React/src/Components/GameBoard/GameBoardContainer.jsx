import React, { useState } from 'react'
import "./GameBoardContainer.css"
import GameBoard from './GameBoard'
import ResultScreen from '../ResultScreen/ResultScreen';

function GameBoardContainer() {

    let [player, setPlayer] = useState("X");

    let [positions, setPositions] = useState(["", "", "","", "", "","", "", ""]);
    let [gameRunning, setGameRunning] = useState(true);
    let [showResult, setShowResult] = useState("none");
    let [matchDraw, setMatchDraw] = useState(false)

    const winConditions = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(e){
        let cell = e.target;
        if (cell.textContent != "" || gameRunning == false){
            return;
        }
        cell.textContent = player;
        const cellIndex = cell.getAttribute("cellIndex");
        positions[Number(cellIndex)] = player
        setPositions(positions);
        checkDraw();
        checkWin();
        if (gameRunning){
            setPlayer(player == "X" ? "O" : "X");
        }

    }

    function checkWin(){
        winConditions.forEach(([x, y, z]) => {
            if (positions[x] != "" && positions[y] != "" && positions[z] != ""){
                if (positions[x] == positions[y] && positions[y] == positions[z]){
                    setGameRunning(false);
                    setShowResult("grid");
                }
            }
        })
    }

    function restart(){
        setPlayer("X");
        setPositions(["", "", "","", "", "","", "", ""]);
        setGameRunning(true);
        setShowResult("none");
        document.querySelectorAll(".cell").forEach(ele => {
            ele.textContent = "";
        })

    }

    function checkDraw(){
        const emptyCell = positions.filter(item => item == "");
        if (emptyCell.length == 0){
            setGameRunning(false);
            setShowResult("grid");
            setMatchDraw(true);
        }
    }

  return (
    <div className='game-board-container'>
        <h1>Tic Tac Toe</h1>
        <GameBoard handleCellClick={handleCellClick} player={player}/>
        <p className='turn'>{player} turn now</p>
        <ResultScreen display={showResult} winner = {player} btnOnClick={restart} draw={matchDraw}/>
    </div>
  )
}

export default GameBoardContainer
