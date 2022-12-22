import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="social">
                <a href="https://www.linkedin.com/in/yao-lee" target="_blank">
                    <img
                        className="linkedin"
                        alt="linkedin-link"
                        src="./icons/theme/linkedin.png"
                    ></img>
                </a>
                <a href="https://twitter.com/FSD_YaoLee" target="_blank">
                    <img
                        className="twitter"
                        alt="twitter-link"
                        src="./icons/theme/twitter.png"
                    ></img>
                </a>
            </div>
            <small>&copy; Copyright 2022, YFL</small>
        </div>
    );
};

export default Footer;
