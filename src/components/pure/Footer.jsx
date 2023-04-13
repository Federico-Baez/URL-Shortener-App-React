import React from 'react';

//images
import logo from '../../design/images/logo-footer.svg';
import fbLogo from '../../design/images/icon-facebook.svg';
import twLogo from '../../design/images/icon-twitter.svg';
import prLogo from '../../design/images/icon-pinterest.svg';
import igLogo from '../../design/images/icon-instagram.svg';

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
                    {/* TODO: add color change to the media logos -> hsl(180, 66%, 49%) */}
                    <img className='media-logo' src={fbLogo} alt="facebook logo" />
                    <img className='media-logo' src={twLogo} alt="twitter logo" />
                    <img className='media-logo' src={prLogo} alt="pinterest logo" />
                    <img className='media-logo' src={igLogo} alt="instagram logo" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
