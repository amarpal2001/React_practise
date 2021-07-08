import React, {useState} from 'react'

function HookCounterTwo() {
    const intialCount = 0;
    const [count, setCount] = useState(intialCount)
    // const incrementFive = () => {
    //         setCount(count+5)
    // }
    return (
        <div style={{textAlign:'center'}}>
            count: {count}<br/>
            <button style={{backgroundColor:'cyan'}} onClick={()=>setCount(intialCount)}>Reset</button>
            <button style={{backgroundColor:'yellow'}} onClick={()=>setCount(count+1)}>Increment</button>
            <button style={{backgroundColor:'pink'}} onClick={()=>setCount(count-1)}>Decrement</button>
            {/* <button style={{backgroundColor:'skyblue'}} onClick={incrementFive}>Increment 5</button> */}
         </div>
    )
}
export default HookCounterTwo;