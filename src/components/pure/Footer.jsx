import React from 'react';

//images
import logo from '../../design/images/logo-footer.svg';

//Media Logos
import FacebookLogo from '../../components/icons/facebookLogo';
import TwitterLogo from '../icons/twitterLogo';
import PinterestLogo from '../icons/pinterestLogo';
import InstagramLogo from '../icons/instagramLogo';



const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-dashboard'>
                <h2 className='title'>Boost your links today</h2>
                <button className='primary-btn'>Get Started</button>
            </div>

            <div className='footer-main'>
                <div className='foot-img-div'>
                    <img className='logo' id='foot-logo' src={logo} alt="shortly logo" />
                </div>

                <div className='foot-links-div'>
                    <div className='foot-links-col'>
                        <ul>
                            <li>Features</li>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div className='foot-links-col'>
                        <ul>
                            <li>Resources</li>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='foot-links-col'>
                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className='foot-media-div'>
                    <FacebookLogo />
                    <TwitterLogo />
                    <PinterestLogo />
                    <InstagramLogo />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
