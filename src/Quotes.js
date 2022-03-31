import React from 'react';

const Quotes = ({quote}) => {
    return (
        <div className='card'>
            <h1><i className="fa-solid fa-quote-left"></i> {quote} <i className="fa-solid fa-quote-right"></i></h1>
            
        </div>
    );
};

export default Quotes;