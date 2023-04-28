import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import style from "./styles.css";

import About from "./pages/About";
import Mathical from "./pages/Mathical";
import VendingMachine from "./pages/VendingMachine";
import Iumienkind from "./pages/Iumienkind";

import Nav from "./components/index/Nav";
import PageChoices from "./components/index/PageChoices";
import Footer from "./components/index/Footer";

function App() {
    const [light, setLight] = useState(false);
    const handleLight = () => {
        setLight((p) => !p);
    };

    const isLight = light ? " light-mode" : "";

    return (
        <div className={`app main${isLight}`}>
            <Nav
                theme={light}
                isLight={isLight}
                handleLight={handleLight}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PageChoices
                            theme={light}
                            isLight={isLight}
                            handleLight={handleLight}
                        />
                    }
                />
                <Route
                    path="/mathical"
                    element={
                        <Mathical
                            theme={light}
                            isLight={isLight}
                            handleLight={handleLight}
                        />
                    }
                />
                <Route
                    path="/vending-machine"
                    element={
                        <VendingMachine
                            theme={light}
                            isLight={isLight}
                            handleLight={handleLight}
                        />
                    }
                />
                <Route
                    path="/iumienkind"
                    element={
                        <Iumienkind
                            theme={light}
                            isLight={isLight}
                            handleLight={handleLight}
                        />
                    }
                />
                <Route
                    path="/about"
                    element={
                        <About
                            theme={light}
                            isLight={isLight}
                            handleLight={handleLight}
                        />
                    }
                />
            </Routes>
            <Footer
                className="footer"
                theme={light}
                isLight={isLight}
                handleLight={handleLight}
            />
        </div>
    );
}

export default App;
