import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


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
                <CopyToClipboard text={item.shortenedURL}>
                    <button onClick={handleCopyClick} className={isCopied ? 'copied-btn' : 'primary-btn'} >{isCopied ? "Copied!" : "Copy"}</button>
                </CopyToClipboard>

            </div>

        </li>
    );
};

export default ItemComponent;
