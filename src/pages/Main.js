import React from "react";
import PageChoices from "../components/index/PageChoices";

const Main = (props) => {
    return (
        <main className={`main${props.isLight}`}>
            <PageChoices
                className="choice"
                theme={props.theme}
                isLight={props.isLight}
                handleLight={props.handleLight}
            />
        </main>
    );
};

export default Main;    
