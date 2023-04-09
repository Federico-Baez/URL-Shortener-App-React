import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const ItemComponent = ({ item }) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsCopied(false);
        }, 2300)
    }, [isCopied]);

    const handleCopyClick = () => {
        setIsCopied(true);
    }

    return (
        <li className='item'>
            <span className='extendedURL'>{item.URL}</span>
            <div className='right-end-div'>
                <span className='shortenedURL' id='shortenedURL1'>{item.shortenedURL}</span>
                <button onClick={handleCopyClick} className={isCopied ? 'copied-btn' : 'primary-btn'} >{isCopied ? "Copied!" : "Copy"}</button>
            </div>

        </li>
    );
};


ItemComponent.propTypes = {

};


export default ItemComponent;
