import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import QuestionsPage from '../QuestionsPage/QuestionsPage';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink className='nav nav-link link-new_question' to='/new-question'></NavLink>
                <ProfileButton className='nav profile-button' user={sessionUser}/>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className='nav nav-link link-login' to='/login'>Login</NavLink>
                <NavLink className='nav nav-link link-signup' to='/signup'>Signup</NavLink>
            </>
        );
    }

    return (
        <div className='nav'>
            <ul>
                <li>
                    <NavLink className='nav nav-link link-home' exact to='/'>Home</NavLink>
                </li>
                <li>{isLoaded && sessionLinks}</li>
            </ul>
        </div>
    )
}

export default Navigation;