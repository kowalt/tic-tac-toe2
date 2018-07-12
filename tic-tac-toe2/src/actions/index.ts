export interface ActionInterface{
  type: string;
}

// squareType- can be 'X' or 'O'
export const checkSquare = (index: number) => ({
    type: 'CHECK_SQUARE',
    index
});

export const timeTravel = (moveIndex: number) => ({
    type: 'TIME_TRAVEL',
    moveIndex
});

export const fetchHistory = (index: number) => ({
        type: 'FETCH_HISTORY',
        index
    }
);
