import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Info</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Info">Add</Link>
                    </li>
                </ul>
            </div>
            </nav>
         );
    }
}
 
