// I used state with constructor

import React, { Component } from 'react';
class Practise extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"amarpal",
            roll:"232",
            age : 33
        };
    }
    render() {
        const {name, roll, age} = this.state
        return <h1> Hello, {name} your rolll number is {roll} and Your age is {age}</h1>
    }
}
export default Practise;

// i used state without constructor

// import React, { Component } from 'react' 
// class Practise extends Component {
//     state = {
//         name:"rahul",
//         roll:"23"
//     };
//     render(){
//         return <h1> Hii, {this.state.name} {this.state.roll}</h1>
//     };
// };
// export default Practise;
