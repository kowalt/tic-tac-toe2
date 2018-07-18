import * as React from 'react';
import Board from './Board';

export interface GameProps{
    winner: string | null;
}

export default class Game extends React.Component<GameProps, {}>{

    render() {
        let announcement = "";
        if(this.props.winner)
            announcement = "And the winner is: ";

        return (
            <div className="game">
                <div>{announcement}{this.props.winner}</div>

                <Board/>
            </div>
        );
    }
}
