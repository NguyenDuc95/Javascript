import React, { Component } from "react"

export default class FancyText extends Component {
    render() {
        return (
            <span style={{
                fontWeight: "bold",
            }}>{this.props.children}</span>
        )
    }
}