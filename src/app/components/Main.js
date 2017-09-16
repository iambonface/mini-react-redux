import React, { Component } from 'react';
import { render } from 'react-dom';

export const Main = (props) => {
        return(
            <div className="Main">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button 
                        className="btn btn-primary"
                        onClick={() => props.changeUsername("Mudiri")}>
                            Change Username
                        </button>
                    </div>
                </div>

            </div>
        );

}
