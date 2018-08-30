import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import IssueDescriptionContainer from '../pages/issueDescription';
import IssueListContainer from '../pages/issueList';
class Routes extends Component {
    render() {
     
        return (
            <Router>
                 <div className="container">
                    <Switch>
                        <Route path="/"   exact component={IssueListContainer} />
                        <Route path="/issue/:issueId"   component={IssueDescriptionContainer} />
                        <Route component={render => (<div>no data </div>)} />
                    </Switch>
                </div>
                 
            </Router>
        )
    }
};

export default Routes;