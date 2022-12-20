import React from "react";

const PageChoices = (props) => {
    return (
        <div className={`choices-list${props.isLight}`}>
            <div className="choices-project">
                <h2 className="choices-text">Mathical</h2>
                <img
                    className="choices-img"
                    src="./images/backgrounds/bg-math.jpg"
                    alt="math background"
                ></img>
            </div>
            <div className="choices-project">
                <h2 className="choices-text">Store</h2>
                <img
                    className="choices-img"
                    src="./images/backgrounds/bg-photo.jpg"
                    alt="store background"
                ></img>
            </div>
            <div className="choices-project">
                <h2 className="choices-text">Photography</h2>
                <img
                    className="choices-img"
                    src="./images/backgrounds/bg-photography.jpg"
                    alt="photography background"
                ></img>
            </div>
        </div>
    );
};

export default PageChoices;
