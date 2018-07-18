import * as React from 'react';
import {BoardState} from "../reducers/rootReducer";

export interface HistoryProps{
    history: BoardState[];
}

export interface HistoryState{

}


export default class History extends React.Component<HistoryProps, HistoryState>{

    constructor(props: HistoryProps){
      super(props);
    }

    render(){
        const history = this.props.history;

        let labels: string[]= new Array(history.length);
        let labelsContentTemplate = "Go to move #";
        labels[0] = "Go to the game start";

        for(let i=1; i<history.length; i++){
          labels.push(labelsContentTemplate+i)
        }

        const listItems = history.map((historyItem, index) =>
          <div className="historyListItemContainer">
            <li key="index">
              <button>
                labels[index];
              </button>
            </li>
          </div>
        );

        return(<ol>
            {listItems}
          </ol>);
    }
}
