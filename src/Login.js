import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Login extends Component {
    Login = () => {
        alert("Form submitted")
    }
    render() {
        return (
            <div className="main">
                Login Form
                <form className="login">
                    Email: <input className="first1" type="text" placeholder="enter the name"  /><br/><br/>
                    Pwrd: <input className="first1" type="password" placeholder="enter the password"/><br/><br/>
                    <button className="btn" onClick={this.Login}>submit</button>
                    <button className="Hello"><Link to='/' className="back">back</Link></button>
                </form>
            </div>
        )
    }
}

export default Login;
