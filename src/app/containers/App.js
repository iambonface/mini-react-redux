import React, { Component } from 'react';
import { render } from  'react-dom';

import User from '../components/User';
import Main from '../components/Main';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            username: "Bonface"
        };
    }
    changeUsername = (newName) => {
        this.setState({
            username: newName
        });
    }
    render(){
        return(
            <div className="App container">
                <Main changeUsername={this.changeUsername.bind(this)} />
                <User username={this.state.username } />
            </div>
        );
    };

};
export default App;