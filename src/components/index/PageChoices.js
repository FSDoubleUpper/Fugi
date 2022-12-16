import React from "react";

const PageChoices = (props) => {
    return (
        <div className={`${props.isLight}`}>
            <div className="choices-list">
                <div className="choices-project">
                    <h2 className="choices-text">Mathical</h2>
                    <img
                        className="choices-img"
                        src="./images/backgrounds/bg-math.jpg"
                    ></img>
                </div>
                <div className="choices-project">
                    <h2 className="choices-text">Store</h2>
                    <img
                        className="choices-img"
                        src="./images/backgrounds/bg-photo.jpg"
                    ></img>
                </div>
                <div className="choices-project">
                    <h2 className="choices-text">Photography</h2>
                    <img
                        className="choices-img"
                        src="./images/backgrounds/bg-photography.jpg"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default PageChoices;
