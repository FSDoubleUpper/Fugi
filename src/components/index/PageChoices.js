import React from "react";
import { Route, Routes, Link } from "react-router-dom";

const PageChoices = (props) => {
    return (
        <div className={`body${props.isLight}`}>
            <Link className="choices-link" to="/mathical">
                <div className="choices-project">
                    <h2 className="choices-text">Mathical</h2>
                    <img
                        className="choices-img"
                        src="./images/backgrounds/bg-math.jpg"
                        alt="math background"
                    ></img>
                </div>
            </Link>
            <Link className="choices-link" to="/vending-machine">
                <div className="choices-project">
                    <h2 className="choices-text">Vending Machine</h2>
                    <img
                        className="choices-img"
                        src="./images/backgrounds/bg-vm.jpg"
                        alt="vending machine background"
                    ></img>
                </div>
            </Link>
            <Link className="choices-link" to="/">
                <div className="choices-project">
                    <h2 className="choices-text">Store</h2>
                    <h3 className="choices-text choices-text2">In Progress</h3>
                    <img
                        className="choices-img in-progress"
                        src="./images/backgrounds/bg-photo.jpg"
                        alt="store background"
                    ></img>
                </div>
            </Link>
            <Link className="choices-link" to="/">
                <div className="choices-project">
                    <h2 className="choices-text">Lens Finder</h2>
                    <h3 className="choices-text choices-text2">In Progress</h3>
                    <img
                        className="choices-img in-progress"
                        src="./images/backgrounds/bg-photography.jpg"
                        alt="photography background"
                    ></img>
                </div>
            </Link>
        </div>
    );
};

export default PageChoices;
