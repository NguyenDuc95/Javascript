import React, { Component } from 'react';

export default class FormInput extends Component {
    constructor() {
        super();
        this.myInput = React.createRef();
        this.mySelect = React.createRef();
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSelectIphone = this.onSelectIphone.bind(this);
    }
    // arrInt = [1, 2, 3, 4];
    // listItems = arrInt.map((number)=>{
    //     <li>number</li>
    // });
    state = {
        inputValue: "",
        selectedValue: "i_x",
    }
    
    onSelectIphone() {
        this.setState({ selectedValue: this.mySelect.current.value });
        console.log(this.mySelect.current.value);
    }
    onChangeHandle() {
        console.log(this.myInput.current.value);
        this.setState({ inputValue: this.myInput.current.value });
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" ref={this.myInput} onChange={this.onChangeHandle}></input>
                    <div>{this.state.inputValue}</div>

                    <select value={this.state.selectedValue} onChange={this.onSelectIphone} ref={this.mySelect}>
                        <option value="i_xr">Iphone XR</option>
                        <option value="i_8s">Iphone 8s plus</option>
                        <option value="i_x">Iphone X</option>
                    </select>
                    <div>Selected{this.state.selectedValue}</div>

                    <div>List</div>

                </form>

            </div>
        );
    }

}