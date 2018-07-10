//import { ActionInterface } from "../actions";
import * as _ from 'lodash';

export interface TicTacToeState {
    winner: string | null;
    history: BoardState[];
    stepIndex: number;
    xIsNext: boolean;
}

class BoardState {
    squares: string[];
}

const initialState = {
    history: [
        {
            squares: Array(9).fill("")
        }
    ],
    stepIndex: 0,
    xIsNext: true,
    winner: ""
}

export default function rootReducer(state: TicTacToeState = initialState, action: any) //actionInterface TODO
{
    function jumpTo(step: number) {
        state.stepIndex = step;
        state.xIsNext = ((step%2) === 0);
    }

    function calculateWinner(squares: string[])
    {
          const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }

          return null;
    }

    switch(action.type)
    {
        case 'CHECK_SQUARE':
          let index: number = action.index;
          if(state.xIsNext == true){
            state.history[state.stepIndex].squares[index] = 'X';
          }
          else {
            state.history[state.stepIndex].squares[index] = 'O';
          }

          state.winner = calculateWinner(state.history[state.stepIndex].squares);
          break;
        case 'TIME_TRAVEL':
          jumpTo(action.moveIndex);
          state.history = _.slice(state.history,0, action.moveIndex);
          break;
        case 'FETCH_HISTORY':
          jumpTo(action.moveIndex);
          break;
    }

    return state;
}
