import React, { Component } from "react";
const activeButton = {
    backgroundColor: "green",
    color: "white"
}
export default class Footer extends Component {
    render() {
        const selected = this.props.filter;
        return (
            <div>
                <button style={selected === "all" ? activeButton : {}}>All</button>
                <button style={selected === "active" ? activeButton : {}}>Complete</button>
                <button style={selected === "complete" ? activeButton : {}}>Active</button>
            </div>

        )
    }
}