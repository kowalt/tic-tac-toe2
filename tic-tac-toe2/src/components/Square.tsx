import * as React from 'react';

export interface SquareProps {
    content: string;
    index: number;
}

export interface SquareState {
    content: string;
}

export interface SquareEventProps
{
    onClick: (index: number) => void;
}

export default class Square extends React.Component<SquareProps & SquareEventProps, SquareState>{

    constructor(props: SquareProps & SquareEventProps) {
        super(props);
    }

    public render(){
        console.log(this.props.content);
        return (
            <button className="square" onClick={() => this.props.onClick(this.props.index)}>{this.props.content}</button>
        );
    }
}