import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../design/images/logo.svg';




const Header = () => {
    return (
        <div className='header'>
            <div className='logo-nav'>
                <img className='logo' src={logo} alt="shortly logo" />
                <ul className='Navigation'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>

            <div className='log-buttons'>
                <button className='secondary-btn'>Login</button>
                <button className='primary-btn'>Sign Up</button>
            </div>
        </div>
    );
};


Header.propTypes = {

};


export default Header;
