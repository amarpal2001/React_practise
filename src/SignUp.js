import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class SignUp extends Component {
    render() {
        return (
            <div className="mainBox">
                SignUp Form
                <form className="signup">
                    Name: <input className="input1" type="text" placeholder="enter the name" required/><br/><br/>
                    Email:<input className="input2" type="email" placeholder="enter the email" required/><br/><br/>
                    Cont: <input className="input3" type="contact" placeholder="enter the contact" required/><br/><br/>
                    Pwd: <input className="input4" type="password" placeholder="enter the password" required/><br/><br/>
                    C.pwd: <input className="input5" type="password" placeholder="enter the confirm pwd" required/><br/><br/>
                    <button className="btn6"><Link to="/Login"  className="btn2">SignUp</Link></button>
                </form>
            </div>
        )
    }
}

export default SignUp;
