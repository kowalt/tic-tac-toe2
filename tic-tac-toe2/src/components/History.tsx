import * as React from 'react';
import {BoardState} from "../reducers/rootReducer";

interface HistoryProps{
    history: BoardState[];
}

interface HistoryState{

}


export default class History extends React.Component<HistoryProps, HistoryState>{
    render(){
        const history = this.props.history;

        let labels: string[]= new Array(history.length);
        let labelsContentTemplate = "Go to move #";
        labels[0] = "Go to the game start";
        labels = labels.map( (label, index) => {return labelsContentTemplate+index});


        const listItems = history.map((historyItem) =>
            <li>
                Go to move {Go}
            </li>
        );

        return(<ul>
            {listItems}
            </ul>);
    }
}