import './css/Board.css';

function Board({board, setBoard}) {

    const handleBoxChange = (e, row, col) => {
        let newBoard = [...board]; 
        if(e.target.value <= 9 && e.target.value >= 1) {
            newBoard[row][col] = parseInt(e.target.value); 
        }
        setBoard(newBoard); 
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