import React from 'react';
import './NotFound.css'
import notFound from '../../images/notFound.gif'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="not found" className="image-fluid w-100"/>
        </div>
    );
};

export default NotFound;