import React, { Component } from "react";

export default class Header extends Component{
    myRef = React.createRef();
    handleSumit=(e)=>{
        e.persist();
        e.preventDefault();
        this.props.addTodo(
            Math.round(Math.random()*1000000),
            this.myRef.current.value
        )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumit}>
                    <input type="text" ref={this.myRef}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}