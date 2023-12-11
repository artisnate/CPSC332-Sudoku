import './css/Board.css'; 
import { useState } from "react";

let board1 = [
    [8,6,5,1,2,9,7,4,3],
    [7,3,9,8,6,4,5,1,2],
    [1,4,2,5,7,3,9,6,8], 
    [3,2,8,9,1,7,6,5,4],
    [5,1,4,6,3,8,2,9,7], 
    [6,9,7,4,5,2,3,8,1], 
    [9,5,3,7,4,1,8,2,6], 
    [4,7,6,2,8,5,1,3,9],
    [2,8,1,3,9,6,4,7,5]
]

function Board() {
    let[board, setBoard] = useState(Array.from({ length: 9}, () => Array.from({ length: 9}, () => 0)));

    const handleBoxChange = (e, row, col) => {
        let newBoard = [...board]; 
        newBoard[row][col] = e.target.value; 
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
                                />
                                </td>
                            ))}
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    ); 
}

export default Board; 