import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './SpashPage.css';
import img from './imgs/jakob-owens-W0hkz1EnX8I-unsplash.jpg'

function SplashPage({ data }) {
    const dispatch = useDispatch();

    return (
        <div className='splash-container'>
            <img className='bg-splash' alt='jakob-owens photo from unsplash: The Strangers' src={img}/>
            <div className='text'>
                <h1>Welcome to Horrorflow!</h1>
                <p>Horrorflow, keep the horror flow going by asking and/or posting questions about the horror movies you've seen recently. Ask questions about confusing endings, or discuss things you wish a filmmaker would do. All horror is welcome, new and old alike!</p><br/>
                <p>To get started signup or login in above.</p>
            </div>
        </div>
    )
};

export default SplashPage;