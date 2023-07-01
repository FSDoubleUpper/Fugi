import React from "react";
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
                toPage="/iumienkind"
                title="iumienkind"
                imageBackground="./images/backgrounds/bg-imk.jpg"
                imageAlt="store background"
                isPageOnline={true}
            />
            <PageChoicesLinks
                toPage="/fecolorz"
                title="FEColorz"
                imageBackground="./images/backgrounds/bg-fecolorz.jpg"
                imageAlt="FE colors background"
                isPageOnline={true}
            />
            {/* <PageChoicesLinks
                toPage="/"
                title="Lens Finder"
                imageBackground="./images/backgrounds/bg-photography.jpg"
                imageAlt="photography background"
                isPageOnline={false}
            /> */}
        </div>
    );
};

export default PageChoices;
