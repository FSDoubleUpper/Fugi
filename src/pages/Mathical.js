import React from "react";

const Mathical = (props) => {
    return (
        <div className="main">
            <h1>Mathical</h1>
            <div className="mathical-video">
                <video
                    src="https://youtu.be/GWRK_jQABVU"
                    type="video/mp4"
                    controls
                    title="Mathical"
                    width="50%"
                    height="50%"
                ></video>
            </div>
            <div className="mathical-info">
                <p>Mathical is a basic math practice application.</p>
                <p>Paremeters you can set:</p>
                <ul className="mathical-list">
                    <li>number of equations</li>
                    <li>largest number to use</li>
                    <li>type of equation to practice</li>
                </ul>
            </div>
        </div>
    );
};

export default Mathical;
