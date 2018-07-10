import * as React from 'react';
import Board from './Board';

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
