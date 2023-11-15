import { useState } from "react";

function Board() {
    const [board, setBoard] = useState( [
        [1213,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]    
    ]);

    const handleBoxChange = (row, col, value) => {
        setBoard((currBoard) => {
            const newBoard = [...currBoard]; 
            newBoard[row][col] = value; 
            return newBoard; 
        });
    };

    return(
        <>
            <table>
                <tbody>
                    {
                        board.map( function(row) {
                            return <tr>
                            {
                                row.map( function(col) {
                                    return <td><input type="number" value={col} onChange={handleBoxChange}></input></td>
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