// import React, { Component } from 'react'


// class MyComp extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.heading}</h1>
//                 <p>{this.props.content}</p>
//                 <h3>{this.props.para}</h3>
//             </div>
//         )
//     }
// }
// export default MyComp;

import React from 'react'

function MyComp (props){
    return (
        <div>
            <h1>{props.heading}</h1>
            {props.content}
            {props.para}
        </div>
    )
}

export default MyComp

