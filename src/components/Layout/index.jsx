import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                padding: '20px',
                boxSizing: 'border-box',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                margin: '20px auto',
                maxWidth: '800px',

            }}>
                {children}
            </div >
            <Footer />
        </>
    )
}
export default Layout;