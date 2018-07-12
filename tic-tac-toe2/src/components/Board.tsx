import * as React from "react";

import SquareContainer from "../containers/SquareContainer";

interface BoardProps{

}

interface BoardState{

}

export default class Board extends React.Component<BoardProps, BoardState>{

    render()
    {
      return(
        <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
      );
    }

    renderSquare(i: number)
    {
        return <SquareContainer index={i}/>
    }
}
