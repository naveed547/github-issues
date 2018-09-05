import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';

import {Provider} from "react-redux";
import configureStore,{history} from "./store";

//import { loadIssues,loadIssue,loadRepos } from './actions/repoAction';
import Routes from './router';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();
/*const pathName = store.getState().router.location.pathname;
if(pathName.indexOf('/issue/') !== -1) {
  let issueId = pathName.split('/issue/')[1];
  store.dispatch(loadIssue(issueId),store.getState().reposReducer.userName,store.getState().reposReducer.currentRepo);
} else if(pathName.indexOf('/issueList/') !== -1) {
  store.dispatch(loadIssues(pathName.split('/issueList/')[1],store.getState().reposReducer.userName));
} else {
  store.dispatch(loadRepos(store.getState().reposReducer.userName));
}*/
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter  history={history}>
          <div className="container">
             <h1 className="text-center">GitHub Issue API</h1>
              <Routes />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
