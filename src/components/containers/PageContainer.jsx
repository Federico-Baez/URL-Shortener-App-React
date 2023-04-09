import React from 'react';
import Header from '../pure/Header';
import Dashboard from '../pure/Dashboard';
import LinkShortenerFormik from '../pure/LinkShortenerFormik';
import Footer from '../pure/Footer';
import ListContainer from './ListContainer';
import Statistics from '../pure/Statistics';

//styles
import "../../styles/pageStyle.scss"

const PageContainer = () => {
    return (
        <div className='page-container'>
            <Header />
            <Dashboard />
            <ListContainer />
            <Statistics />
            <Footer />
        </div>
    );
}

export default PageContainer;
