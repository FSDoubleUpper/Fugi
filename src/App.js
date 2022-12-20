import React, { useState } from "react";
import Main from "./pages/Main";
import style from "./styles.css";

function App() {
    const [light, setLight] = useState(false);
    const handleLight = () => {
        setLight((p) => !p);
    };

    const isLight = light ? " light-mode" : "";

    return (
        <div className={`app${isLight}`}>
            <Main theme={light} isLight={isLight} handleLight={handleLight} />
        </div>
    );
}

export default App;
