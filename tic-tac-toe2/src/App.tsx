import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Game from "./components/Game";

import {Provider} from 'react-redux';

class App extends React.Component {
  public render() {

    const store = createStore(todoApp);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TIC TAC TOE by TOMASZ KOWAL</h1>
        </header>
        <p className="App-intro">
            <Provider store={store}>
                <Game />
            </Provider>
        </p>
      </div>
    );
  }
}

export default App;
