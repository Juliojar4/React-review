import React from 'react';
 
import './style.scss';
 
const Err404 = () => {

    return (
        <div>
            <h1 class>404 Error</h1>
            <p className="zoom-area">Page not found</p>
            <section className="error-container">
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
            </section>
            <div className="link-container">
            <a target="_blank" href="http://localhost:3000/react-review/" className="more-link" rel="noreferrer">Return to Home</a>
            </div>
        </div>
    )
};

export default Err404;