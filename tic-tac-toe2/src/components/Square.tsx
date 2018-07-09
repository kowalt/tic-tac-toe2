import * as React from 'react';

export interface Props {
    index: number;
}

export default class Square extends React.Component<Props, object>{

    render (){
        return (
            <button className="square"/>
        );
    }
}