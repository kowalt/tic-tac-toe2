import { ActionInterface } from "../actions";

export interface TicTacToeState {
    winner: string;
    history: BoardState[];
    stepNumber: number;
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
    stepNumber: 0,
    xIsNext: true,
    winner: ""
}

export default function rootReducer(state: TicTacToeState = initialState, action: ActionInterface)
{
    function jumpTo(step) {
        state.stepNumber = step;
        state.xIsNext = ((step%2) === 0);
    }

    switch(action.type)
    {
        case 'CHECK_SQUARE':

        case 'TIME_TRAVEL':
        case 'FETCH_HISTORY':
    }

    return state;
}
