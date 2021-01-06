import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import QuestionsPage from '../QuestionsPage/QuestionsPage';
import './Navigation.css';
import './Footer.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='nav-container'>
                <NavLink className='nav nav-link link-home' to='/questions'>Home</NavLink>
                <NavLink className='nav nav-link link-new_question' to='/new-question'></NavLink>
                <ProfileButton className='nav profile-button' user={sessionUser}/>
            </div>
        );
    } else {
        sessionLinks = (
            <div className='nav-container'>
                <NavLink className='nav nav-link link-home' to='/'>Home</NavLink>
                <NavLink className='nav nav-link link-login' to='/login'>Login</NavLink>
                <NavLink className='nav nav-link link-signup' to='/signup'>Signup</NavLink>
            </div>
        );
    }

    return (
        <>
            <div className='nav-container'>
                <div className='nav'>
                    <ul>
                        <li>{isLoaded && sessionLinks}</li>
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <Link to='https://github.com/djangothesolarboy/horrorflow' id='github' className='footer-link' target='_blank' rel='noreferrer'>Github</Link>
                <Link to='https://www.linkedin.com/in/damien-darko/' id='linkedin' className='footer-link' target='_blank' rel='noreferrer'>Linkedin</Link>
            </div>
        </>
    )
}

export default Navigation;