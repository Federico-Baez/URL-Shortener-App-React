import React from 'react';
import logo from '../../design/images/logo.svg';




const Header = () => {
    return (
        <header className='header'>
            <div className='logo-nav'>
            <img className='logo' src={logo} alt="shortly logo" />
            <span className='demo'>Demo</span>
            {/* <ul className='Navigation'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul> */}
            </div>

            {/* <div className='log-buttons'>
                <button className='secondary-btn'>Login</button>
                <button className='primary-btn'>Sign Up</button>
            </div> */}
        </header>   
    );
};

export default Header;
