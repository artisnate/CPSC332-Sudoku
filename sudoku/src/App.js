
import './App.css';
import Board from './Board'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <h1>Sudoku</h1>
        <button>Start Game</button>
        <div id='board-container'>
          <Board />
        </div>
      </body>
    </div>
  );
}

export default App;
