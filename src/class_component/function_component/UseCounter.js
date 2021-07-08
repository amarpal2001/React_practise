import React, {useState, useEffect} from 'react'

function UseCounter() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}
export default UseCounter;
