import './css/App.css';
import Board from './Board'; 
import Instructions from './Instructions';

function App() {

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
          <h3 id='instruction-title'>How to play</h3>
          <div id='instruction-container'>
            <Instructions />
          </div>
          <button id='start-button'>Start Game</button>
          <div id='board-container'>
            <Board/>
          </div>
          <h3 id='history-title'>Game History</h3>
          <div id='record-container'></div>
        </div>
      </body>

    </div>
  );
}

export default App;
