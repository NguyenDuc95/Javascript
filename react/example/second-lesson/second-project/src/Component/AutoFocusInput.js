import React, { Component } from 'react';

export default class AutoFocusInput extends Component {
    myRef = React.createRef();
    // render co dieu kien. need check this.myRef.curren != null
    componentDidMount() {
        console.log("componentDidMount");
        this.myRef.current.focus();
    }
    render() {
        return (
            <div className="App">
                {/* this.props: Cho phep truyen all props xuong child */}
                <input ref={this.myRef} {...this.props}/>
            </div>
        );
    }

}

