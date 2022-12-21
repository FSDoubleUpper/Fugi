import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <img
                className={`linkedin${props.isLight}`}
                alt="linkedin-link"
                src={
                    props.theme
                        ? "./icons/theme/linkedin-light.png"
                        : ""
                }
            ></img>
            <img
                className={`twitter${props.isLight}`}
                alt="twitter-link"
                src={
                    props.theme
                        ? "./icons/theme/twitter-light.png"
                        : ""
                }
            ></img>
        </div>
    );
};

export default Footer;