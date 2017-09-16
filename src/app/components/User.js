import React, { Component } from 'react';
import { render } from 'react-dom';

class User extends Component{
    render(){
        return(
            <div className="Main row">
                <div className="col-xs-12">
                     <h1>The User Page</h1>
                </div>
                <div className="container">
                    <div className="col-xs-12">
                        <p>User Name: {this.props.username}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default User;