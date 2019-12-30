import React, { Component } from 'react';

export default class Hooks extends Component {
    constructor() {
        super();
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    state = { value1: 0 }
    handleIncrease() {
        this.setState({ value1: this.state.value1 + 1 });
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleIncrease}>click here</button>
                    <div>{this.state.value1}</div>
                </div>
                <div>
                <button >click here</button>
                    <div></div>
                </div>

            </div>

        );
    }
}