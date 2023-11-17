import './Board.css'; 
import { useState } from "react";

function Board() {
    const [board, setBoard] = useState(Array.from({length: 9},()=> Array.from({length: 9}, () => 0)));

    const handleBoxChange = (row, col, e) => {
        let newBoard = [...board]; 
        newBoard[row][col] = e.target.value; 
        setBoard(newBoard); 
    };

    return(
        <>
            <table id="board">
                <tbody>
                    {
                        board.map( function(row) {
                            return <tr>
                            {
                                row.map( function(col) {
                                    return <td><input type="number" value={col} onChange={e => handleBoxChange(row, col, e)}/></td>
                                })
                            }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    ); 
}

export default Board; 