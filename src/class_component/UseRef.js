import React, { useEffect, useRef } from 'react'

function UseRef() {
    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const submitRef = useRef(null);


    useEffect(() => {
        firstRef.current.focus();
    }, [])
    
    function firstKeyDown(e){
        if (e.key === "Enter"){
            lastRef.current.focus();
        }
            

    }
    function lastKeyDown(e){
        if (e.key === "Enter"){
            submitRef.current.focus();
        }
    }
    function submitKeyDown(){
        alert('Form submitted')

    }


    return (
        <div>
            <header className="App_header">
                <input type="text" onKeyDown={firstKeyDown} ref={firstRef} placeholder="enter first name:" />
                <input type="text" onKeyDown={lastKeyDown} ref={lastRef} placeholder="enter last name:" />
                <button onKeyDown={submitKeyDown} ref={submitRef}>submit</button>
            </header>
        </div>
    )
}

export default UseRef;


