import React, { Component } from 'react';

export default class HandleEvent extends Component {
    
    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
        this.showInput = this.showInput.bind(this);
        this.myRef = React.createRef()
    }
    state = {
        isToggleOn: true
    }


    handleOnClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        console.log(this.state.isToggleOn);
    }
    showInput(){
        console.log(this.myRef.current.value);
        alert(this.myRef.current.value);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={this.showInput}>Click here</button>
                    <input type="text" ref={this.myRef}/>
                </header >
            </div >
        );
    }
}
