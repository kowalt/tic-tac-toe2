import * as React from 'react';

export interface SquareProps {
    index: number;
}

export interface SquareState {
    content: string;
}

export default class Square extends React.Component<SquareProps, SquareState>{

    constructor(props: SquareProps)
    {
        super(props);
    }

    private onClick(){
      dispatch(checkSquare(props.index));
    }

    render (){
        return (
            <button className="square"/>
        );
    }
}
