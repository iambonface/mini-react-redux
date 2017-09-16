import React, { Component } from 'react';
import { render } from  'react-dom';

import User from '../components/User';
import Main from '../components/Main';

import './App.css';

class App extends Component {
    constructor(){
        super();

    }
    changeUsername = (newName) => {

    }
    render(){
        return(
            <div className="App container">
                <Main changeUsername={this.changeUsername.bind(this)} />
                <User username="Bonface" />
            </div>
        );
    };

};
export default App;