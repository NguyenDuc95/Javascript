import React, { Component } from 'react';

class FromInput extends Component {
    state = {
        isShow: false,
        valueButton: "Show input"
    }
    render() {
        return (
            <div className="App">
                <body>
                    <div>
                        <button onClick={() => {
                            this.setState({ valueButton: this.state.isShow ? "Show input" : "Not show input", isShow: !this.state.isShow })
                        }}>{this.state.valueButton}</button>
                        <div>
                            {this.state.isShow ? <input type="text" autoFocus /> : null}
                        </div>

                    </div>
                </body>
            </div>
        );
    }

}

export default FromInput;
