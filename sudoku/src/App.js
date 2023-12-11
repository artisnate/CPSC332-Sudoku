import './css/App.css';
import Board from './Board'; 
import Instructions from './Instructions';
import { useState } from 'react';

let board_sol = [
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

let play_board = [
  ['','',5,1,'',9,7,'',''],
  ['',3,9,'',6,'',5,1,''],
  ['',4,'','',7,'','',6,''], 
  ['','',8,'','','',6,'',4],
  ['','','',6,'',8,'',9,''], 
  ['',9,'',4,5,2,3,'',1], 
  ['',5,'','',4,'','',2,''], 
  ['',7,'','',8,'','',3,''],
  ['',8,1,3,9,6,4,7,'']  
]

function App() {
  let[board, setBoard] = useState(play_board); 

  return (
    <div className="App">
      <header className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap" rel="stylesheet"></link>
      </header>

      <body>
        <h1>Sudoku</h1>
        <div id='page-container'>
          <h2 id='instruction-title'>How to play</h2>
          <div id='instruction-container'>
            <Instructions />
          </div>
          <button id='start-button'>Start Game</button>
          <div id='board-container'>
            <Board board={board} setBoard={setBoard}/>
          </div>
          <h2 id='history-title'>Game History</h2>
          <div id='record-container'></div>
        </div>
      </body>

    </div>
  );
}

export default App;
