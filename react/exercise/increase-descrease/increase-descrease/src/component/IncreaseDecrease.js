import React, { Component } from 'react';
import './IncreaseDecrease.css';

class IncreaseDecrease extends Component {
    static defaultProps = {
        isDisable: false
    }
    state = {
        counter: 0,
        isIncrease: true,
        valueButton: "Increase",
        stateButton: false
    }
    render() {
        return (
            <div className="IncreaseDecrease" >
                <button onClick={() => {
                    this.setState((currentState) => {
                        if (currentState.counter === 0) {
                            currentState.isIncrease = true;
                        }
                        if (currentState.counter === 20) {
                            currentState.isIncrease = false;
                        }
                        if (currentState.isIncrease) {
                            return { counter: currentState.counter + 1, valueButton:"Increase" }
                        } else {
                            if (!this.props.isDisable) {
                                currentState.valueButton = "Decrease"
                            } else {
                                currentState.stateButton = true;
                                return { stateButton: currentState.stateButton, counter: currentState.counter}
                            }
                            return { stateButton: currentState.stateButton, counter: currentState.counter - 1 }
                        }

                    })
                }} disabled={this.state.stateButton}>{this.state.valueButton}</button>
                <div>{this.state.counter}</div>
            </div >
        );
    }

}

export default IncreaseDecrease;
