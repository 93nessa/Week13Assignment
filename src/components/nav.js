import React from "react";
import './login'

export default class Nav extends React.Component{
    render(){
        return(
            <ul class="nav nav-pills">
                <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                 <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                 <a class="nav-link" href="#">Contact Us</a>
                </li>
            </ul>
            
        )
    }
}