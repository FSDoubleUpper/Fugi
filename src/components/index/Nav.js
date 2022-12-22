import React from "react";
import { Route, Routes, Link } from "react-router-dom"


const Nav = (props) => {
    return (
        <div className={`nav-wrapper${props.isLight}`}>
            <div className={`nav-links${props.isLight}`}>
                <Link to="/" className={`nav-home${props.isLight}`}>
                    HOME
                </Link>
                <Link to="about" className={`nav-about${props.isLight}`}>
                    ABOUT
                </Link>
            </div>
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
    );
};

export default Nav;
