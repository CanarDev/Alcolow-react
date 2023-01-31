import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/todolist">
                <li>ToDoList</li>
            </NavLink>
            <NavLink to="/counter">
                <li>Counter</li>
            </NavLink>
            <NavLink to="/cocktails">
                <li>Cocktails</li>
            </NavLink>
            <NavLink to="/about">
                <li>About</li>
            </NavLink>
            </ul>
        </div>

    );
}

export default Navbar;
