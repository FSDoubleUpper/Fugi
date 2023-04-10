import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Nav = (props) => {
    return (
        <div className={`nav-wrapper${props.isLight}`}>
            <nav className={`nav-links-left${props.isLight}`}>
                <Link to="/" className={`nav-home${props.isLight}`}>
                    HOME
                </Link>
                <Link to="/about" className={`nav-about${props.isLight}`}>
                    ABOUT
                </Link>
            </nav>
            <div className="nav-links-right">
                <SocialLinks isLight={props.isLight} />
                <img
                    className={`nav-button${props.isLight}`}
                    src={
                        props.theme
                            ? "./icons/theme/light.png"
                            : "./icons/theme/dark.png"
                    }
                    alt="light dark mode button"
                    onClick={props.handleLight}
                />
                <div className={`nav-title${props.isLight}`}>YAO LEE</div>
            </div>
        </div>
    );
};

export default Nav;
