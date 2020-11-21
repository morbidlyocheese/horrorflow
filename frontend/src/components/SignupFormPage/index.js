import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

import './SignupFormPage.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setemail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser ) return <Redirect to='/'/>;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field!']);
    }

    return (
        <div className='signup-container'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li className='signup signup-errors' key={idx}>{error}</li>)}
                </ul>
                <label className='signup signup-email'>
                    Email:
                    <input className='signup signup-email' type='text' value={email} onChange={(e) => setemail(e.target.value)} required/>
                </label>
                <label className='signup signup-username'>
                    Username:
                    <input className='signup signup-username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </label>
                <label className='signup signup-password'>
                    Password:
                    <input className='signup signup-password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                <label className='signup signup-confirm'>
                    Confirm Password:
                    <input className='signup signup-confirm' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </label>
                <button className='signup signup-button' type='submit'>Signup</button>
            </form>
        </div>
    );
}

export default SignupFormPage;