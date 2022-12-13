import React from "react";
import ThemeMode from "../ThemeMode";

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-links">
                <a href="index.html" className="nav-home">HOME</a>
                <a href="about.html" className="nav-about">ABOUT</a>
            </div>
            <div className="nav-title">YAO LEE</div>
        </div>
    );
};

export default Nav;