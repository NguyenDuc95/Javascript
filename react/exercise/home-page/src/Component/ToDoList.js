import React, { Component } from 'react';
import axios from 'axios';
import './ToDoList.css'

export default class ToDoList extends Component {

    state = {
        selectIndex: -1,
        listItems: [],
        isLoading: false,
        hasError: false,
        selectID: -1
    }
    handleClickItem(id) {
        this.setState({ selectID: id }, this.makeRequest);
    }
    makeRequest() {
        this.setState({
            isLoading: true
        })
        const selectID = this.state.selectID;
        axios({
            url: selectID === -1 ? "http://52.77.254.77:3010/tasks" : "http://52.77.254.77:3010/tasks/" + selectID,
            method: "get",
            responseType: "json"
        }).then(result => {
            this.setState({
                isLoading: false
            })
            if (result.status === 200) {
                const data = result.data.result;
                if (selectID === -1) {
                    this.setState({
                        listItems: data,
                    })
                } else {
                    let index = -1;
                    index = this.state.listItems.findIndex(element => element.id === data[0].id);
                    let listItemTemp = this.state.listItems;
                    listItemTemp[index] = data[0];
                    this.setState({ listItems: listItemTemp, selectIndex: index });
                }

            }
        }).catch((error) => {
            console.log(error)
            this.setState({
                isLoading: false,
                hasError: error.message
            })

        })
    }
    componentDidMount() {
        if (this.state.selectID === -1) {
            this.makeRequest();
        }

    }
    render() {
        const { listItems, selectIndex, isLoading, hasError } = this.state;

        let listRender = null;
        if (isLoading) {
            listRender = <div>Loading</div>;
        } else if (hasError !== false) {
            listRender = <div>{hasError}</div>;
        } else {
            listRender =
                <div >
                    {
                        selectIndex === -1 ? <div style={{ color: "#282c34", backgroundColor: "#f0eb99", height: "100%" }}>Detail show here ...</div> :
                            <div className="main-content" >
                                <div className="title-content">Title</div>
                                <div className="content-item">{listItems[selectIndex].title}</div>

                                <div className="title-content">Description</div>
                                <div className="content-item">{listItems[selectIndex].desc}</div>

                                <div className="title-content">Complete Date</div>
                                <div className="content-item">{listItems[selectIndex].completed_time}</div>
                            </div>
                    }
                </div>;

        }
        return (
            <div >
                <div className="ToDoList">
                    <div className="side-bar">
                        {/* show list item */}
                        <div>
                            {
                                listItems.map(
                                    (item, index) => {
                                        return <div key={item.id} onClick={this.handleClickItem.bind(this, item.id)} 
                                        style={selectIndex === index ? { backgroundColor: "#f0eb99", color: "black" } : {}} >{item.title}</div>
                                    },
                                    this)
                            }
                        </div>
                    </div>
                    <div className="content">{listRender}</div>
                </div>


            </div>
        );

    }

}

