import * as React from 'react';
import Board from './Board';

export interface GameProps{
    winner: string | null;
}

export default class Game extends React.Component<GameProps, {}>{

    render() {
        return (
            <div className="game">
                <div>And the winner is:{this.props.winner}</div>
                <Board/>
            </div>
        );
    }
}
