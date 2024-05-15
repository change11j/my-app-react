import React, {useState} from 'react';
import Board from "./Board.jsx";


export default function Game() {
    const [history,setHistory]=useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove]=useState(0);
    const currentSquares = history[currentMove];
    const isXNext= currentMove%2===0;
    function handlePlay(nextSquares){
        const nextHistory=[...history.slice(0,currentMove+1),nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }
    function jumpTo(nextMove){
        setCurrentMove(nextMove);
        setIsXNext(nextMove%2===0);
    }
    const moves = history.map((squares,move)=>{
        let description;
        if(move>0){
            description="go to #"+move;
        }else {
            description="go to gameStart"
        }
        return (
            <li key={move}>
                <button onClick={()=>jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board isXNext={isXNext} squares={currentSquares} handlePlay={handlePlay}/>
                </div>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </>
    );
};
