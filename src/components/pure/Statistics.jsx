import React from 'react';
import PropTypes from 'prop-types';

//images
import StatImg1 from '../../design/images/icon-brand-recognition.svg'
import StatImg2 from '../../design/images/icon-detailed-records.svg'
import StatImg3 from '../../design/images/icon-fully-customizable.svg'


const Statistics = () => {
    return (
        <div className='statistics-container'>
            <div className='statistics-header'>
                <h2 className='title'>Advanced Statistics</h2>
                <p className='description'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className='divisor'></div>
            <div className='card-container'>
                {/* CARD 1 */}
                <div className='statistic-card' id='card-1'>
                    <div className='stat-card-img'>
                        <img id='img-1' src={StatImg1} alt="Brand Recognition img" />
                    </div>
                    <h4 className='stat-card-title'>
                        Brand Recognition
                    </h4>
                    <p className='stat-card-description'>
                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                {/* CARD 2 */}
                <div className='statistic-card' id='card-2'>
                    <div className='stat-card-img'>
                        <img id='img-2' src={StatImg2} alt="Brand Recognition img" />
                    </div>
                    <h4 className='stat-card-title'>
                        Detailed Records
                    </h4>
                    <p className='stat-card-description'>
                        Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                    </p>
                </div>
                {/* CARD 3 */}
                <div className='statistic-card' id='card-3'>
                    <div className='stat-card-img'>
                        <img id='img-3' src={StatImg3} alt="Brand Recognition img" />
                    </div>
                    <h4 className='stat-card-title'>
                        Fully Customizable
                    </h4>
                    <p className='stat-card-description'>
                        Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                </div>
            </div>

        </div>
    );
};


Statistics.propTypes = {

};


export default Statistics;
