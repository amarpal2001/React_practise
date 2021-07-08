import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class Button extends Component {
    constructor(props) {
        super(props)
    }
    render() {  
        return (
            <div className="btn1">
                {/* <button class="btn btn-primary" type="submit" className="login-btn">login</button> */}
                <button className="btn7"><Link to="Login" className="log">login</Link></button>
                <br/><br/>
                {/* <button class="btn btn-primary" type="submit" className="sign-btn">signup</button> */}
                <button className="btn5"><Link to="/SignUp" className="sign">SignUp</Link></button>
            </div>
        )
    }
}

export default Button;
