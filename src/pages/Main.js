import React from "react";
import PageChoices from "../components/index/PageChoices";

const Main = (props) => {
    return (
        <div className={`main${props.isLight}`}>
            <PageChoices
                className="choice"
                theme={props.theme}
                isLight={props.isLight}
                handleLight={props.handleLight}
            />
        </div>
    );
};

export default Main;
