import React, { Component } from 'react';

class EncreaseDecrease extends Component {
    static defaultProps = {
        isDisable: false
    }
    state = {

        counter: 0,
        isEncrease: true,
        valueButton: "Encrease",
        stateButton: false
    }
    render() {
        return (
            <div className="App">
                <div>{this.state.counter}</div>
                <button onClick={() => {
                    this.setState((currentState) => {
                        if (currentState.counter === 0) {
                            currentState.isEncrease = true;
                        }
                        if (currentState.counter === 20) {
                            currentState.isEncrease = false;
                        }
                        if (currentState.isEncrease) {
                            return { counter: currentState.counter + 1 }
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
            </div >
        );
    }

}

export default EncreaseDecrease;
