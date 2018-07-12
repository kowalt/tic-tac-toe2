import * as React from 'react';

export interface SquareProps {
    index?: number;
    content?: string;
}

export interface SquareState {
    content: string;
}

export interface SquareEventProps
{
    onClick: (index: number) => void;
}

export default class Square extends React.Component<SquareProps, SquareState>{

    constructor(props: SquareProps) {
        super(props);
    }

    render (){
        return (
            <button className="square">{this.props.content}</button>
        );
    }
}
