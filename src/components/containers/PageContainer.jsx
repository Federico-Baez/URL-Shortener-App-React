import React from 'react';
import Header from '../pure/Header';
import Dashboard from '../pure/Dashboard';
import Footer from '../pure/Footer';
import ListContainer from './ListContainer';
import Statistics from '../pure/Statistics';

//styles
import "../../styles/pageStyle.scss"

const PageContainer = () => {
    return (
        <div className='page-container'>
            <div className='page-body'>
                <Header />
                <Dashboard />
                <ListContainer />
                <Statistics />
            </div>
            <Footer />
        </div>
    );
}

export default PageContainer;
