import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="p-4 d-flex flex-column align-items-center">
            <p><span className="color-a">Sajjad Amin | {new Date().getFullYear()}</span></p>
        </footer>
    );
};

export default Footer;