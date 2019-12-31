import React, { Component } from 'react';
import './ToDoList.css'
const listItem = [];
const typeThourh = {
    textDecoration: "line-through"
};
export default class ToDoList extends Component {
    myRef = React.createRef();
    state = {
        inputValue: '',
        typeText: {}
    }

    handleSubmitEvent = () => {
        const input = this.myRef.current.value;
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
            this.handleSubmitEvent();
        }
    }
    handleClickItem(e) {
        listItem[e].isThourgh = listItem[e].isThourgh ? false : true;
        this.setState({});
    }
    render() {
        return (
            <div className="ToDoList">

                {/* <form onSubmit={this.handleSubmitEvent}>
                    <input type="text" ref={this.myRef} onKeyDown={this.handleKeyboard} maxLength={60} placeholder="input here ..." />
                    <input type="submit" value="Submit" />
                </form> */}
                <div className="input-area">
                    <input type="text" ref={this.myRef} onKeyDown={this.handleKeyboard} maxLength={60} placeholder="input here ..." />
                    <button onClick={this.handleSubmitEvent}>Submit</button>
                    <div id="clear"></div>
                </div>
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


