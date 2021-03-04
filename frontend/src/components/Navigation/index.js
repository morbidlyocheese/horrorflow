import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';

import './Navigation.css';
import './Footer.css';

import angellist from './assets/angellist.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

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
            <div className='footer-container'>
                <a className='about-link' href='https://angel.co/u/damien-darko' rel="noreferrer" target="_blank">
                    <img src={angellist} alt='angellist' />
                </a>
                <a className='about-link' href='https://github.com/djangothesolarboy' rel="noreferrer" target="_blank">
                    <img src={github} alt='github' />
                </a>
                <a className='about-link' href='https://www.linkedin.com/in/damien-darko/' rel="noreferrer" target="_blank">
                    <img src={linkedin} alt='linkedin' />
                </a>
            </div>
        </>
    )
}

export default Navigation;