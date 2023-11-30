import './Board.css'; 
import { useState } from "react";

function Board() {
    let[board, setBoard] = useState(Array.from({length: 9}, ()=> Array.from({length: 9}, () => 0)));

    const handleBoxChange = (e, row, col) => {
        let newBoard = [...board]; 
        newBoard[row][col] = e.target.value; 
        setBoard(newBoard); 
        console.log(`row${row} col${col}`);
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