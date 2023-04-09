import React from 'react';
import PropTypes from 'prop-types';
import illustrationWorking from '../../design/images/illustration-working.svg';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard-main'>
                <h1 className='title'>More than just shorter links</h1>
                <p className='description'>Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </p>
                <button className='primary-btn'>Get Started</button>
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
