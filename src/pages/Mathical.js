import React from "react";

const Mathical = (props) => {
    return (
        <div className="main">
            <h1>Mathical</h1>
            <div className="mathical-video">
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/GWRK_jQABVU"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="mathical-info">
                <p>Mathical is a basic math practice application.</p>
                <br/><br/>
                <p>Parameters you can set:</p>
                <ul className="mathical-list">
                    <li>number of equations</li>
                    <li>largest number to use</li>
                    <li>type of equation to practice</li>
                </ul><br/>
                <p>You can click <a href="https://github.com/FSDoubleUpper/Mathical" target="_blank">here</a> to go to github.</p>
            </div>
        </div>
    );
};

export default Mathical;
