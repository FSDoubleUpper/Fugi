import React from "react";
import Nav from "../components/index/Nav";
import Footer from "../components/index/Footer";
import PageChoices from "../components/index/PageChoices";

const Main = (props) => {
    return (
        <div className={`main${props.isLight}`}>
            <Nav
                theme={props.theme}
                isLight={props.isLight}
                handleLight={props.handleLight}
            />
            <PageChoices
                theme={props.theme}
                isLight={props.isLight}
                handleLight={props.handleLight}
            />
            <Footer
                theme={props.theme}
                isLight={props.isLight}
                handleLight={props.handleLight}
            />
        </div>
    );
};

export default Main;
