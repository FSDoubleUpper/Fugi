import React from "react";

const VendingMachine = (props) => {
    return (
        <div className="main">
            <h1>Vending Machine</h1>
            <div className="vm-video">
                <iframe
                    src="https://www.youtube.com/embed/rcliIKXZGUY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="vm-info">
                <p>Vending Machine is a CLI application. The application takes in a ".txt" or "".csv" file.</p>
                <br/><br/>
                <p>Vending Machine functions:</p>
                <ul className="vm-list">
                    <li>Insert dollar amount</li>
                    <li>pick items</li>
                    <li>handle out of stock</li>
                    <li>handle wrong item choices</li>
                    <li>logs transactions</li>
                </ul><br/>
            </div>
        </div>
    );
};

export default VendingMachine;
