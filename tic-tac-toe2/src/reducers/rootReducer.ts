//import { ActionInterface } from "../actions";
import * as _ from 'lodash';

export interface TicTacToeState {
    winner: string | null;
    history: BoardState[];
    stepIndex: number;
    xIsNext: boolean;
}

export class BoardState {
    squares: string[];
}

export default function rootReducer(state: TicTacToeState, action: any) //actionInterface TODO
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

    state = _.clone(state);

    switch(action.type)
    {
        case 'CHECK_SQUARE':
          let index: number = action.index;

          //prevent checking the square that is already filled
          if(state.history[state.stepIndex].squares[action.index] != "" ){
              break;
          }

          state.stepIndex++;
          state.xIsNext = ((state.stepIndex%2) === 0);

          state.history[state.stepIndex] = _.cloneDeep(state.history[state.stepIndex-1]);

          if(state.xIsNext){
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
          jumpTo(action.index);
          break;
    }

    return state;
}
