import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const userId = useSelector((state) => state.session.user.id);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        }
        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to='/' />
    }

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        setRedirect(true);
    };

    return (
        <>
            <button className='profile-button' onClick={openMenu}>
                <div className='icon'/>
            </button>
            {showMenu && (
                <>
                    <div className='triangle'/>
                    <ul className='profile-dropdown'>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <a className='profile-link' href={`/users/${userId}/profile`}>profile</a>
                        <li>
                            <button className='logout-button' onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </>
            )}
        </>
    );
};

export default ProfileButton;