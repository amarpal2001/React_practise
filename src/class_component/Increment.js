import React, { Component } from 'react';

class Increment extends Component {
    state = {
        value:0

    };
    DecrementItem = () => {
        this.setState({value:this.state.value-1})
    }
    IncrementItem = () => {
        this.setState({value:this.state.value+1})
    }
    clearItem = () =>{
        this.setState({value:0})
    }
    render(){
        return (
            <div className="container">
                <h1 className="inside">{this.state.value}</h1>
                <h3>
                <button onClick={this.IncrementItem} className="size">+</button>
                <button onClick={this.DecrementItem} className="size1">-</button>
                <button onClick={this.clearItem} className="size2">c</button>
                </h3>
            </div>
            )
    };
};
export default Increment;