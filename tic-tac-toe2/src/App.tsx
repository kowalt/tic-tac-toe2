import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import GameContainer from "./containers/GameContainer";

class App extends React.Component {
  public render() {

    const initialState = {
      history: [
          {
              squares: Array(9).fill("")
          }
      ],
      stepIndex: 0,
      xIsNext: true,
      winner: ""
    }

    const store = createStore(rootReducer, initialState);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TIC TAC TOE by TOMASZ KOWAL</h1>
        </header>
        <div className="App-intro">
            <Provider store={store}>
                <GameContainer />
            </Provider>
        </div>
      </div>
    );
  }
}

export default App;
