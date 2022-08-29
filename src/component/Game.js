import React, { useState } from 'react'
import Board from "./Board"

import './GameStyle.css'
import { checkWin } from './winner'


function Game(){

    const [square, setSquare] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = checkWin(square)

    const handleClick = (index) => {
        const squareCpy = [...square]
        if(winner || squareCpy[index]) return;
        squareCpy[index] = xIsNext ? 'X' : 'O'

        setSquare(squareCpy)
        setXIsNext(!xIsNext)
    }

    const handleReset = () => {
        setSquare(Array(9).fill(null))
        setXIsNext(true)
    }

    let status
    if(winner){
        status = "Winner: " + winner;
    } else{
        status = `Next Step: ${xIsNext ? 'X' : 'O'}`
    }


    return (
        <div className="game">
            <div className="game-board">
            <Board  
                cells={square} 
                value={square} 
                onClick={handleClick}/>
            </div>
            <div className="game-info">
            <span className="text">{status}</span>
            <button className='reset' onClick={handleReset}>Reset Game</button>
        </div>
      </div>
    )
}

export default Game