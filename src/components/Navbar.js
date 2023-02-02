import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/auth';
import { clearMessage } from '../actions/message';
import { useLocation } from 'react-router-dom';

function Navbar() {

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    let location = useLocation();

    useEffect(() => {
        if (["/login", "/register"].includes(location.pathname)) {
        dispatch(clearMessage()); 
        }
    }, [dispatch, location]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
        setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        }
    }, [currentUser]);


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

            <ul>
            {showModeratorBoard && (
            <li className="nav-item">
            <Link to={"/mod"} className="nav-link">
                Moderator Board
            </Link>
            </li>
            )}

            {showAdminBoard && (
            <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
                Admin Board
            </Link>
            </li>
            )}

            {currentUser && (
            <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                User
                </Link>
            </li>
            )}

            {currentUser ? (
            <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
                </a>
            </li>
            ) : (
            <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                Login
                </Link>
            </li>
            )}

            {currentUser ? (
            <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                {currentUser.username}
                </Link>
            </li>
            ) : (
            <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                Sign Up
                </Link>
            </li>
            )}
            </ul>

            
        </div>

    );
}

export default Navbar;
