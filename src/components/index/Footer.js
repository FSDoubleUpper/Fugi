import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="social">
                <a href="https://github.com/FSDoubleUpper" target="_blank">
                    <img
                        className="github"
                        alt="github-link"
                        src="./icons/theme/github.png"
                    ></img>
                </a>
                <a href="https://codepen.io/fsdoubleupper" target="_blank">
                    <img
                        className="codepen"
                        alt="codepen-link"
                        src="./icons/theme/codepen.png"
                    ></img>
                </a>
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
