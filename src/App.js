import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';

import {Provider} from "react-redux";
import configureStore,{history} from "./store";

import Routes from './router';
import { ConnectedRouter } from 'connected-react-router';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="container">
            <h1 className="text-center">GitHub Issue API</h1>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
