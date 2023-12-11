import './css/Board.css'; 
import { useState } from "react";

function Board({board, setBoard}) {

    const handleBoxChange = (e, row, col) => {
        let newBoard = [...board]; 
        if(e.target.value <= 9 && e.target.value >= 1) {
            newBoard[row][col] = e.target.value; 
        }
        setBoard(newBoard); 
        console.log(board); 
    };

    return(
        <>
            <table id="board">
                <tbody>
                {
                    board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                        {
                            row.map((col, colIndex) => (
                                <td key={colIndex}> 
                                <input
                                    type="number"
                                    onChange={e => handleBoxChange(e, rowIndex, colIndex)}
                                    value={board[rowIndex][colIndex]}
                                />
                                </td>
                            ))
                        }
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    ); 
}

export default Board; 