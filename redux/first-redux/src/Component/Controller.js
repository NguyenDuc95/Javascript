import React, { Component } from 'react';
import { connect } from 'react-redux';
 class Controller extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.dispatch({type:'UP'});
                }
                }>Increase</button>
                <button onClick={()=>{
                    this.props.dispatch({type:'DOWN'});
                }
                }>discrease</button>
            </div>
        )
    }
}
export default connect()(Controller);