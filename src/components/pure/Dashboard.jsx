import React from 'react';
import PropTypes from 'prop-types';

//images
import illustrationWorking from '../../design/images/illustration-working.svg';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard-main'>
                <h1 className='title'>More than just shorter links</h1>
                <p className='description'>
                    Link Shortener Demo, integrated with the Short.io API, featuring a sleek landing design. Give it a try below.
                {/* Build your brand’s recognition and get detailed insights
                    on how your links are performing. */}
                </p>
                <button 
                className='primary-btn' 
                onClick={() => {
                    document.getElementById('shortener').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                    });
                }}
                >
                    Get Started
                </button>
            </div>
            <div className='dashboard-img'>
                <img className='logo' src={illustrationWorking} alt="illustration working image" />
            </div>
        </div>
    );
};


Dashboard.propTypes = {

};


export default Dashboard;
