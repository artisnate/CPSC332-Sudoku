import './css/App.css';
import Board from './Board'; 
import Instructions from './Instructions';
import Timer from './Timer';
import GameRecords from './GameRecords.js';
import { useState } from 'react';
import axios from 'axios';  

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
  const [board, setBoard] = useState(new Array(9).fill().map(entry => new Array(9).fill(0))); 
  const [start, setStart] = useState(false); 
  const [win, setWin] = useState(true); 
  const [minutes, setMinutes] = useState(0); 
  const [seconds, setSeconds] = useState(0); 
  const [gameRecord, setGameRecord] = useState({
    time: '00:00:00',
    date: '0000-00-00',
    difficulty: "easy"
  })

  const handleStartButtonClick = () => {
    //set the board to play board instead of 0s
    setBoard(play_board); 
    setStart(!start); 
  }

  const handleCheckBoardClick = () => {
    //check the board and set the win state
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(board_sol[i][j] !== play_board[i][j]) {
          setWin(false);
          console.log(`${typeof board_sol[i][j]}, ${typeof play_board[i][j]}`);
        }
        else {
          setWin(true); 
        }
      }
    }

    console.log(win); 
     
    //insert into database
    if(win === true) {
      console.log(gameRecord.time); 
      axios.post('http://localhost:8081/add', gameRecord)
      .then(res => console.log(res))
      .catch(err => console.log(err));      
    }

    
  }

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
          <div id='button-timer-container'>
            <button id='start-button' onClick={() => handleStartButtonClick()}>{start ? "Pause Game" : "Start Game"}</button>
            <Timer start={start} minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} gameRecord={gameRecord} setGameRecord={setGameRecord}/>
            <button id='check-button' onClick={() => handleCheckBoardClick()}>Check Board</button>
          </div>
          <div id='board-container'>
            <Board board={board} setBoard={setBoard}/>
          </div>
          <h2 id='history-title'>Game History</h2>
            <GameRecords/>
          <div id='record-container'>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
