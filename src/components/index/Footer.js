import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <img
                className={`linkedin${props.isLight}`}
                alt="linkedin-link"
                src={
                    props.theme
                        ? ".icons/theme/linkedin-light.png"
                        : ".icons/theme/linkedin-dark.png"
                }
            ></img>
            <img
                className={`twitter${props.isLight}`}
                alt="twitter-link"
                src={
                    props.theme
                        ? ".icons/theme/twitter-light.png"
                        : ".icons/theme/twitter-dark.png"
                }
            ></img>
        </div>
    );
};

export default Footer;
