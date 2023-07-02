import React from "react";
import Nav from './nav'
import './login.css'


let e = React.createElement;
export default class createLogin extends React.Component {
    render() {
        return (
        <div className="createApp container">
            <Nav></Nav>
            <div className="login">
                <h3 className="container">Log In</h3>
            <form>
                <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2">Username</span>
                <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon2"></input>
                </div>
                <br></br>
                <div className="input-group"> 
                <span className="input-group-addon" id="sizing-addon2">Password</span>
                <input type="text" className="form-control" placeholder="Password" aria-describedby="sizing-addon2"></input>
                </div>
            </form>
            </div> 
        </div>

        )
    }
}