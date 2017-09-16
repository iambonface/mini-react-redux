import React, { Component } from 'react';
import { render } from  'react-dom';

import {User} from '../components/User';
import {Main} from '../components/Main';

import { connect } from 'react-redux';

import './App.css';

class App extends Component {
    render(){
        return(
            <div className="App container">
                <Main changeUsername={() => this.props.setName("Wanda")} />
                <User username={this.props.user.name} />
            </div>
        );
    };

};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);