import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginFormPage.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if(sessionUser) return (
        <Redirect to='/'/>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }
    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li className='login login-errors' key={idx}>{error}</li>)}
                </ul>
                <label className='login login-email'>Email/Username:
                    <input className='login login-email' type='text' value={credential} onChange={(e) => setCredential(e.target.value)} required/>
                </label>
                <label className='login login-password'>Password:
                    <input className='login login-password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                <button className='login login-button' type='submit'>Login</button>
            </form>
        </div>
    );
}


export default LoginFormPage;