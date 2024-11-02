import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-292px)]'></div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;