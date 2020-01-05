import React, { Component } from 'react';
import './MemoryGame.css';
const styleTemplate = {
    transform: "rotateY(180deg)",
    transition: "transform 2s",
    animationDuration: "2s",
    animationName: "item",
    animationFillMode: "forwards",
}
const styleTemplate2 = {
    transform: "rotateY(180deg)",
    transition: "transform 2s",
    animationDuration: "2s",
    animationName: "item",
    animationFillMode: "forwards",
}

const styleTemplate3 = {
    animationDuration: "1s",
    animationName: "second",
    animationFillMode: "forwards",
}
export default class App extends Component {
    state = {
        styleItem1: {},
        styleItem2: {},
        styleItem3: {},
        styleItem4: {},
        pos1:-1,
        pos2:-1,
    }
    handlOnclickItem1 = (e) => {
        this.setState({ styleItem1: styleTemplate });
    }
    handlOnclickItem2 = (e) => {
        e.persist();
        this.setState({ styleItem2: styleTemplate });

    }
    handlOnclickItem3 = (e) => {
        e.persist();
        this.setState({ styleItem3: styleTemplate });
    }
    handlOnclickItem4 = (e) => {
        e.persist();
        this.setState({ styleItem4: styleTemplate });
    }
    render() {
        return (
            <div className="container-grid">
                <div className="item" onClick={this.handlOnclickItem1} style={this.state.styleItem1}></div>
                <div className="item" onClick={this.handlOnclickItem2} style={this.state.styleItem2}></div>
                <div className="item" onClick={this.handlOnclickItem3} style={this.state.styleItem3}></div>
                <div className="item" onClick={this.handlOnclickItem4} style={this.state.styleItem4}></div>
            </div>
        );
    }

}

