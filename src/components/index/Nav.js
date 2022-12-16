import React, { useState } from "react";

const Nav = (props) => {
    return (
        <div className={`nav-wrapper${props.isLight}`}>
            <div className={`nav-links${props.isLight}`}>
                <a href="index.html" className={`nav-home${props.isLight}`}>
                    HOME
                </a>
                <a href="about.html" className={`nav-about${props.isLight}`}>
                    ABOUT
                </a>
            </div>
            <img
                className={`nav-button${props.isLight}`}
                src={
                    props.theme
                        ? "./icons/theme/light.png"
                        : "./icons/theme/dark.png"
                }
                onClick={props.handleLight}
            />
            <div className={`nav-title${props.isLight}`}>YAO LEE</div>
        </div>
    );
};

export default Nav;
