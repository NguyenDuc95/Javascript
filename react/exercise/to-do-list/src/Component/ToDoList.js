import React, { Component } from 'react';
import './ToDoList.css'
const listItem = [];
const typeThourh = {
    textDecoration: "line-through"
};
export default class ToDoList extends Component {
    constructor(){
        super();
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    }
    myRef = React.createRef();
    state = {
        inputValue: '',
        typeText: {}
    }

    handleSubmitEvent(e) {
        const input = this.myRef.current.value;
        e.persist();
        e.preventDefault();
        if (input !== "") {
            this.setState({ inputValue: input });
            const optionId = listItem.length;
            listItem.push({ id: optionId, value: input, isThourgh: false });
            this.myRef.current.value = "";
        } else {
            alert("Please enter input ");
        }
    }

    handleKeyboard = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmitEvent(e);
        }
    }
    handleClickItem(e) {
        listItem[e].isThourgh = listItem[e].isThourgh ? false : true;
        this.setState({});
    }
    render() {
        return (
            <div className="ToDoList">
                <form onSubmit={this.handleSubmitEvent} className="input-area">
                    <input id="text-input" type="text" ref={this.myRef} onKeyDown={this.handleKeyboard} maxLength={60} placeholder="input here ..." />
                    <input id="submit" type="submit" value="Submit" />
                    <div id="clear"></div>
                </form>
                <div className="show-area">
                    <ul >
                        {
                            listItem.map(
                                (item, index) => {
                                    const styleTemp = item.isThourgh ? typeThourh : {};
                                    return <li key={item.id} onClick={this.handleClickItem.bind(this, index)} style={styleTemp}>{item.value}</li>
                                },
                                this)
                        }
                    </ul>
                </div>

            </div>
        );
    }

}


