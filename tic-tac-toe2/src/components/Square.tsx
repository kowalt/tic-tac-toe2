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

    }

    render (){
        return (
            <button className="square"/>
        );
    }
}