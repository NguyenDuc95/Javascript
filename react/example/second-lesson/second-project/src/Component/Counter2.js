import React, { Component } from 'react';
import AutoFocusInput from './AutoFocusInput'


export default class Counter2 extends Component {

    
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickButtonDecrease = this.handleClickButtonDecrease.bind(this);
        this.handleClickButtonMul = this.handleClickButtonMul.bind(this);
    }
    
    handleClickButton(e) {
        
        this.props.increaseCounter(2);

    }
    handleClickButtonDecrease(e) {

        this.props.decreaseCounter(2);

    }
    handleClickButtonMul(e) {

        this.props.mulCounter(2);

    }
  
    render() {
        const { counter } = this.props;
        // const counter = this.props.counter;
        return (
            <div className="App">
                <div>{counter}</div>
                <button onClick={this.handleClickButton} value="Increase">Increase</button>
                <button onClick={this.handleClickButtonDecrease} value="Decrease">Decrease</button>
                <button onClick={this.handleClickButtonMul} value="mul">Mul</button>
            </div>
        );
    }

}

