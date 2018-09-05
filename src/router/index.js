import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import IssueDescriptionContainer from '../pages/issueDescription';
import IssueListContainer from '../pages/issueList';
import userRepoSearchContainer from '../pages/userRepoSearch';
class Routes extends Component {
    render() {
     
        return (
            <Router>
                 <div className="container">
                    <Switch>
                        <Route path="/"   exact component={userRepoSearchContainer} />
                        <Route path="/issueList/:user/:repo"   component={IssueListContainer} />
                        <Route path="/issue/:user/:repo/:issueId"   component={IssueDescriptionContainer} />
                        <Route component={render => (<div>no data </div>)} />
                    </Switch>
                </div>
                 
            </Router>
        )
    }
};

export default Routes;