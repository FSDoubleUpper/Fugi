import React from "react";
import { Link } from "react-router-dom";
import PageChoicesLinks from "./PageChoicesLinks";

const PageChoices = (props) => {
    return (
        <div className={`body${props.isLight}`}>
            <PageChoicesLinks
                toPage="/mathical"
                title="Mathical"
                imageBackground="./images/backgrounds/bg-math.jpg"
                imageAlt="math background"
                isPageOnline={true}
            />
            <PageChoicesLinks
                toPage="/vending-machine"
                title="Vending Machine"
                imageBackground="./images/backgrounds/bg-vm.jpg"
                imageAlt="vending machine background"
                isPageOnline={true}
            />
            <PageChoicesLinks
                toPage="/"
                title="Store"
                imageBackground="./images/backgrounds/bg-photo.jpg"
                imageAlt="store background"
                isPageOnline={false}
            />
            <PageChoicesLinks
                toPage="/"
                title="Lens Finder"
                imageBackground="./images/backgrounds/bg-photography.jpg"
                imageAlt="photography background"
                isPageOnline={false}
            />
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
