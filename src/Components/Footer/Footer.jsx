import React from 'react';

const Footer = () => {
    return (
        <footer className="m-5 d-flex flex-column align-items-center">
            <p><span className="color-a">Sajjad Amin | {new Date().getFullYear()}</span></p>
        </footer>
    );
};

export default Footer;