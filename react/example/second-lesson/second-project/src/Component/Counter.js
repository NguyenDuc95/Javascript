import React, { Component } from 'react';
import AutoFocusInput from './AutoFocusInput'


const optionsArray = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 }
];

export default class Counter extends Component {
    // 
    state = {
        counter: parseInt(this.props.match.params.id,10)
    }
    constructor(props) {
        super(props);
        // cố định context of function handle clickbutton
        // this.handleClickButton = this.handleClickButton.bind(this);
        this.myRef = React.createRef();
        this.handleClickButton = this.handleClickButton.bind(this);
        
    }
    handleClickButton(e) {
        // this.setState({ counter: this.state.counter + parseInt(this.myRef.current.value) });
        e.persist();
        console.log(e);

    }
    decreaseCounter = () => {
        this.setState({ counter: this.state.counter - parseInt(this.myRef.current.value) });
    }
    inputChange = () => {
        this.setState({ inputValue: this.myRef.current.value });
    }

    render() {
        const { counter } = this.state;
        const { step } = this.props;
        return (
            <div className="App">
                <div>{counter}</div>
                <button onClick={this.handleClickButton} value="Increase">Increase</button>
                {/* different value and defaultValue */}
                {/* <AutoFocusInput defaultValue={1} type="number" /> defaultValue={1}  */}
                {/* <br /><input defaultValue={1} type="number" ref={this.myRef} onChange={this.inputChange}></input> */}
                <div>
                    <select defaultValue={step} ref={this.myRef}>
                        {
                            optionsArray.map(function (optionValue) {
                                return (
                                    <option key={optionValue.id} value={optionValue.value}>{optionValue.value}</option>
                                )
                            })
                        }
                    </select>
                </div>

            </div>
        );
    }

}

