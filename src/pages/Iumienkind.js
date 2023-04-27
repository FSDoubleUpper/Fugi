import React from "react";

const Iumienkind = (props) => {
    return (
        <div className="main">
            <h1>Iumienkind</h1>
            <div className="store-info">
                <img
                    className="store-screenshot"
                    src="images\iumienkindss.png"
                    alt="screenshot of the store website"
                />
                <p>
                    Iumienkind is an apparel and accessories clothing shop made
                    with Wordpress. The website is currently maintained by me
                    and will be updated per client request.
                    <br />
                    You can visit her website <a href="www.iumienkind.wordpress.com" target="_blank">here</a>.
                </p>
                <br />
                <br />
                <p>Responsible for:</p>
                <ul className="store-list">
                    <li>Photography</li>
                    <li>Writing</li>
                    <li>Design</li>
                </ul>
            </div>
        </div>
    );
};

export default Iumienkind;
