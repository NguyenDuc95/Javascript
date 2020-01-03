import React, { Component } from "react";
const typeThourh = {
    textDecoration: "line-through"
};
export default class TodoList extends Component {
    static defaultProps = {
        todoList: [],
    }
    render() {
        const { todoList } = this.props;
        return (
            <div >
                {
                    todoList.map(
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