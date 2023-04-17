import React from "react";
import { Link } from "react-router-dom";

const PageChoicesLinks = (props) => {
    return (
        <Link className="choices-link" to={props.toPage}>
            <div className="choices-project">
                <h2 className="choices-text">{props.title}</h2>
                {!props.isPageOnline && (
                    <h3 className="choices-text choices-text2">In Progress</h3>
                )}
                <img
                    className={`choices-img ${!props.isPageOnline && "in-progress"}`}
                    src={props.imageBackground}
                    alt={props.imageAlt}
                ></img>
            </div>
        </Link>
    );
};

export default PageChoicesLinks;
