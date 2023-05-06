import React from "react";

const FEColors = (props) => {
    return (
        <div className="main">
            <h1>FEColors</h1>
            <div className="fecolors-info">
                <img
                    className="fecolors-screenshot"
                    src="images\fecolors.png"
                    alt="screenshot for F E Colors"
                />
                <div>
                    <a
                        href="https://illustrious-blini-92e7a7.netlify.app/"
                        target="_blank"
                        className="play-button"
                    >
                        CLICK HERE to USE
                    </a>
                </div>
                <p>
                    FEColors is a web app that helps front-end developers who
                    have road blocks on font color and background color
                    combination.
                    <br />
                    FEColors assist by generating random colors for font and
                    background as well as allowing an editable custom text for
                    better visualization.
                    <br />
                </p>
                <br />
                <br />
                <p>features for:</p>
                <ul className="fecolors-list">
                    <li>custom text edit</li>
                    <li>randomize color font text</li>
                    <li>randomize color for background</li>
                    <li>provide RGB code</li>
                    <li>provide Hex code</li>
                    <li>easily click on code to copy to clipboard</li>
                </ul>
            </div>
        </div>
    );
};

export default FEColors;
