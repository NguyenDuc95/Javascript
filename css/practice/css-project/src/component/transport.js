import React, { Component } from 'react';
import './transport.css';
import ReactDom from 'react-dom'

const styleTranslate = {
  transform: "translate(100px, 200px)",
  transition: "transform 0.5s"
}
const styleRotate = {
  transform: "rotate(20deg)",
}
const styleScaleX = {
  transform: "scaleX(2)",
}
const styleTransition = {
  width: "10px",
  height: "10px",
  transition: " height 2s, width 2s",
  transitionDelay: "1s",
  transitionTimingFunction: "ease-in",
}
const styleAnimation = {
  animationDuration: "2s",
  animationName: "first",
}
const styleRotateY = {
  transform: "rotateY(180deg)",
  transition: "transform 2s",
  animationDuration: "2s",
  animationName: "first",
}
export default class Transport extends Component {
  constructor() {
    super();
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.object = document.querySelector(".object");
  }
  state = {
    styleObject: {}
  }
  handleTransferKeyBoard = (stepX, stepY, time) => {
    let styleSet = {
      transform: `translate(${stepX}px, ${stepY}px)`,
      transition: `transform ${time}`,
    }
    this.setState({styleObject: styleSet});
  }
  handleTransfer = (e) => {
    e.persist();
    switch (e.target.value) {
      case "reset":
        this.setState({ styleObject: {} });
        break;
      case "transfer":
        this.handleTransfer(10,10,1);
        break;
      case "rotate":
        this.setState({ styleObject: styleRotate });
        break;
      case "scaleX":
        this.setState({ styleObject: styleScaleX });
        break;
      case "Transition":
        this.setState({ styleObject: styleTransition });
        break;
      case "Animation":
        this.setState({ styleObject: styleAnimation });
        break;
      case "rotateY":
        this.setState({ styleObject: styleRotateY });
        break;
      default:
        break;
    }
  }
  handleKeyboard = (e) => {
    if (e.keyCode === 38) {
      console.log("up");
    } else if (e.keyCode === 40) {
      console.log("down");
      this.handleTransferKeyBoard(0,100,1);
      // this.setState({ styleObject: styleTranslate });
    } else if (e.keyCode === 37) {
      console.log("left");
    } else if (e.keyCode === 39) {
      console.log("right");
      this.handleTransferKeyBoard(1,0,0.1);
    }

  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboard);

  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboard);
  }
  render() {
    return (
      <div className="container">
        <div className="content-area">
          <div className="object" style={this.state.styleObject}></div>
        </div>
        <div className="button-area">
          <div>transforms</div>
          <button onClick={this.handleTransfer} value="reset">Reset</button>
          <button onClick={this.handleTransfer} value="transfer">Transfer</button>
          <button onClick={this.handleTransfer} value="rotate">Rotate</button>
          <button onClick={this.handleTransfer} value="scaleX">scaleX</button>
          <div>transition</div>

          <button onClick={this.handleTransfer} value="Transition">Transition</button>
          <div>animation</div>
          <button onClick={this.handleTransfer} value="Animation">Animation</button>
          <button onClick={this.handleTransfer} value="rotateY">rotateY</button>

        </div>
      </div>
    );
  }

}

