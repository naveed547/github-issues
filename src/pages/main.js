import React, {Component} from "react";


import Routes from '../router';


class Main extends Component {
   constructor(props) {
    super(props);    
  }
  render() {
        return (
            <div className="container">
               <h1 className="text-center">Welcome to Github issue Demo page</h1>
                <Routes />
            </div>
        );
    }
}


export default Main;