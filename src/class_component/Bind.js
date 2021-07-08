
// import React, { Component } from 'react';
// class Bind extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             message: "Hello"
//         };
//         // Binding the event handler in the construtor/

//         this.changeMessage = this.changeMessage.bind(this)
//     }
//     // How to use the binding method
//     changeMessage() {
//         this.setState({ message: "goodbye! Baby" })
//         //     console.log(this)    
//     };
//     // changeMessage = () => {
//     //     this.setState({message:"Goodbye!"})
//     // }
//     render() {
//         return (
//             <div className="greet">
//                 <div>{this.state.message}</div>
//                 {/* <button onClick={this.changeMessage.bind(this)}>click</button> */}
//                 {/* <button onClick={() => this.changeMessage()}>click</button> */}
//                 <button onClick={this.changeMessage}>OFLINE</button>
//             </div>
//         )
//     }
// }
// export default Bind;


import React, { Component } from 'react'
class Bind extends Component {
    constructor(props) {
        super(props)

        this.state = {
             message:"hello"
        }
    }
    // bind works only in es5 function and anonyms function

    changeMessage(){
        this.setState({message:"goodbye"})
    }
    // changeMessage=()=>{
    //     this.setState({message:"goodbye"})
    // }
 

    render() {
        return (
            <div>
                {this.state.message}<br/>
                {/* <button onClick={() => this.changeMessage()}>click</button> */}
                <button onClick={this.changeMessage.bind(this)}>click</button>
                {/* <button onClick={this.changeMessage}>click</button> */}
            </div>
        )
    }
}

export default Bind
