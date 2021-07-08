// import React, {useState} from 'react'

// function HookCounterThree() {
//     const [name, setName] = useState({firstName:"", lastName:""})
//     return (
//         <div>
//             <form>
//                 <input type="text" placeholder="enter the first Name:" value={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})}/>
//                 <input type="text" placeholder="enter the last Name:" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
//                 <h2>{name.firstName}</h2>
//                 <h2>{name.lastName}</h2>
//             </form>
//         </div>
//     )
// }
// export default HookCounterThree;        

import React, { useState } from 'react'
function HookCounterThree() {
    const [name, setName] = useState({firstName:"", lastName:"",email:""})
    return (
        <div>
            <form>
                <input type="text" placeholder="enter the firstname" value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}/>
                <input type="text" placeholder="enter the lastname" value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>
                <h2>{name.firstName}</h2>
                <h2>{name.lastName}</h2>
            </form>
        </div>
    )
}
export default HookCounterThree;