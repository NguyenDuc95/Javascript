import React from 'react';
import FancyText from './FancyText';

export default class Counter extends React.Component {
    // deafult props
    static defaultProps = {
        startAt: 0,
        booleanTest: false
    }
    title = document.title;
    state = {
        counter: this.props.startAt,
        counter2: 0
    }
    componentDidMount() {
        console.log("componentDidMount");
        document.title = "Counter"+ this.state.counter;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        document.title = "Counter" + this.state.counter;
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate", this.state.counter);
        if (this.state.counter % 2 === 0) return false;
        return true;
    }
  
    componentWillUnmount() {
        console.log("unmount");
        document.title = this.title;
    }
    render() {
        console.log("render");
        return (
            <div className="App">
                <FancyText background="white">{this.state.counter}</FancyText><br />
                <div>{this.state.counter2}</div><br />
                <div>{this.props.booleanTest + ""}</div><br />
                <div>{JSON.stringify(this.props.testObj)}</div><br />

                <button onClick={() => {
                    // setState function is asychronons
                    this.setState((currentState) => {
                        return {
                            counter: currentState.counter + 1,
                            counter2: currentState.counter2 - 1
                        }
                    })
                    // this.setState((currentState) => {
                    //     return {
                    //         counter: currentState.counter + 1,
                    //         counter2: currentState.counter2 - 1
                    //     }
                    // })
                }}>click here</button>
            </div>
        );
    }

}
// setState(updaterObject)
// setState(func(currentState){})
//  updater object



