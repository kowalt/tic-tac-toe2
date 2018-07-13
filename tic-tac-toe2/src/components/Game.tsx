import * as React from 'react';
import Board from './Board';

export default class Game extends React.Component{

    render() {
        return (
            <div className="game">
                <div>And the winner is:{this.props.winner}</div>
                <Board/>
            </div>
        );
    }
}
