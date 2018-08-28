import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';

import MainApp from "./pages/main" ;

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import {Provider} from "react-redux";
import configureStore, {history} from "./store";
import { ConnectedRouter } from 'connected-react-router';

import { loadIssues,loadIssue } from './actions/repoAction';

const store = configureStore();
const pathName = store.getState().router.location.pathname;
if(pathName.indexOf('/issue/') != -1) {
  let issueId = pathName.split('/issue/')[1];
  store.dispatch(loadIssue(issueId));
} else {
  store.dispatch(loadIssues());
}
console.log(store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

export default App;
