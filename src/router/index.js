import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
 
import IssueDescriptionContainer from '../pages/issueDescription';
import IssueListContainer from '../pages/issueList';
import UserRepoSearchContainer from '../pages/userRepoSearch';
class Routes extends Component {
    render() {
     
        return (
           // <BrowserRouter>
                 <div className="container">
                    <Switch>
                        <Route exact strict path="/" component={UserRepoSearchContainer} />
                        <Route path="/issueList/:user/:repo"   component={IssueListContainer} />
                        <Route path="/issue/:user/:repo/:issueId"   component={IssueDescriptionContainer} />
                        <Route component={render => (<div>no data </div>)} />
                    </Switch>
                </div>     
            //</BrowserRouter>
        )
    }
};

export default Routes;