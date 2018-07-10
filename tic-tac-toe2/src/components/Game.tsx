import * as React from 'react';
import Board from './Board';



export interface gameHistory{
    moves: move[];
}

export default class Game extends React.Component{

    render() {
        return (
            <div>
                <div>The winner is:</div>
                <Board/>
            </div>
        );
    }
}