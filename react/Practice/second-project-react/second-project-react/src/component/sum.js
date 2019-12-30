import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sum extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                    <h1>String {this.props._name}</h1>
                    <h2>Number {this.props._number}</h2>
                    </div>
                </header >
            </div >
        );
    }
}
Sum.propTypes = {
    _name: PropTypes.string,
    _number: PropTypes.number
}
