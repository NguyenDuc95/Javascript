import React, { Component } from 'react';
import axios from 'axios';

export default class HandleAxios extends Component {
    state = {
        dataValue: 0
    }
    componentDidMount() {
        console.log("component Did mount");
        axios.get('/employees')
            .then(res => {
                const dataGet = res.data;
                this.setState({ dataValue: dataGet });
            }).catch(err => console.log(err));
    }
    render() {
        return (
            <div >
                <header >
                    <div>Get data form server:</div>
                    <div>{this.state.dataValue}</div>
                </header>
            </div>
        );
    }

}

