import React, { Component } from "react";
const typeThourh = {
    textDecoration: "line-through"
};
export default class TodoList extends Component {

    render() {
        let listItem = this.props.todoList;
        return (
            <div >
                {
                    listItem.map(
                        (item, index) => {
                            const styleTemp = item.is_completed ? typeThourh : {};
                            return <div key={item.id} style={styleTemp} >{item.title}</div>
                        },
                        this)
                }
            </div>
        )
    }
}