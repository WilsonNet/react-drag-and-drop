import React from 'react';
import Board from './Components/Board';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <main className="fexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Oi sou um card</p>
          </Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Oi sou um card</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
