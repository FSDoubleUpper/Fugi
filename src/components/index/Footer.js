import React from "react";

const Footer = (props) => {
    return (
        <footer className={`footer ${props.isLight}`}>
            <small>&copy; Copyright 2022, YFL</small>
        </footer>
    );
};

export default Footer;