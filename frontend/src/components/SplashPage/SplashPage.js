import React from 'react';

import './SpashPage.css';
import img from './imgs/jakob-owens-W0hkz1EnX8I-unsplash.jpg'

function SplashPage({ data }) {
    return (
        <div className='splash-container'>
            <div className='text'>
                <h1>Welcome to Horrorflow!</h1>
                <p>Horrorflow, keep the horror flow going by asking and/or posting questions about the horror movies you've seen recently. Ask questions about confusing endings, or discuss things you wish a filmmaker would do. All horror is welcome, new and old alike!</p><br/>
                <p>To get started signup or login in above.</p>
            </div>
            <img className='bg-splash' alt='jakob-owens from unsplash: The Strangers' src={img}/>
        </div>
    )
};

export default SplashPage;