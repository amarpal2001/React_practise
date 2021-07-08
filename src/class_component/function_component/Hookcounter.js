
// Increment count using class components

// import React, { Component } from 'react'

// class Hookcounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }
//     incrementCount = () => {
//         this.setState({count:this.state.count+1})
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.incrementCount}>count:{this.state.count}</button>
//             </div>
//         )
//     }
// }

// export default Hookcounter

// Increment count using hook in function components

import React, {useState} from 'react'

function Hookcounter() {
    let [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button onClick={()=> setCount(count+1)}>count</button>
        </div>
    )
}
export default Hookcounter;
