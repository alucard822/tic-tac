import React from 'react';

import './Board.css'
import Square from './Square';

const Board = ({squares, click}) => {
  return (
    <div className="board">
      {
        squares.map((square, i) => (
          <Square key={i} value={square} onclick={() => click(i)} />
        ))
      }
    </div>
  )
}

export default Board;
