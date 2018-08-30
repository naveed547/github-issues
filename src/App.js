import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';

import {Provider} from "react-redux";
import configureStore from "./store";

import { loadIssues,loadIssue } from './actions/repoAction';
import Routes from './router';

const store = configureStore();
const pathName = store.getState().router.location.pathname;
if(pathName.indexOf('/issue/') !== -1) {
  let issueId = pathName.split('/issue/')[1];
  store.dispatch(loadIssue(issueId));
} else {
  store.dispatch(loadIssues());
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
           <h1 className="text-center">GitHub Issue API</h1>
            <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
