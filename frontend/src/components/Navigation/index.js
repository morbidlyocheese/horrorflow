import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser}/>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className='link' to='/login'>Login</NavLink>
                <NavLink className='link' to='/signup'>Signup</NavLink>
            </>
        );
    }

    return (
        <ul className='nav'>
            <li>
                <NavLink className='link' exact to='/'>Home</NavLink>
            </li> 
                <li>{isLoaded && sessionLinks}</li>
        </ul>
    )
}

export default Navigation;