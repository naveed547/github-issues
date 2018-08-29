import React, {Component} from "react";


import Routes from '../router';


class Main extends Component {
  render() {
        return (
            <div className="container">
               <h1 className="text-center">GitHub Issue API</h1>
                <Routes />
            </div>
        );
    }
}


export default Main;