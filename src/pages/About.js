import React, { useState, useEffect } from "react";

const About = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.onload = () => setIsVisible(true);
    }, []);

    return (
        <main className={`main about-main${props.isLight}`}>
            <h1>About</h1>
            <div className={`about-intro${props.isLight}`}>
                <img
                    src="./images/profile.jpg"
                    alt="a portrait photo of Yao"
                    className="about-me"
                ></img>
                <div className="intro">
                    <p className={`${isVisible ? "fade-in" : ""}`}>Hi there!</p>
                </div>
            </div>
            <section className="about-introduction">
                <div className="about-intro2">
                    <div className="about-intro2-img">
                        <figcaption>
                            <img
                                src="./images/stack.jpg"
                                alt="a boy stacking bricks"
                                className="about-me brickboy"
                            ></img>
                            Photo by{" "}
                            <a href="https://unsplash.com/@bel2000a?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                Belinda Fewings
                            </a>{" "}
                            on{" "}
                            <a href="https://unsplash.com/photos/6p-KtXCBGNw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                Unsplash
                            </a>
                        </figcaption>
                    </div>
                    <div>
                        <p>
                            I'm Yao and I'm a Full Stack Developer from
                            California.
                        </p>
                    </div>
                </div>
                <div className="about-intro3">
                    <div>
                        <p>
                            &emsp;I have a passion for programming as it allows
                            me to take the ideas swirling around in my head and
                            turn them into something real.
                            <br />
                            <br />
                            Whether it's a new app or a website, programming
                            gives me the tools to bring my visions to life and
                            share them with the world.
                        </p>
                    </div>
                    <div className="about-intro3-img">
                        <figcaption>
                            <img
                                src="./images/laptop.jpg"
                                alt="laptop balanced on a fingertip"
                                className="about-me"
                            ></img>
                            Photo by{" "}
                            <a href="https://unsplash.com/@pakata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                Pakata Goh
                            </a>{" "}
                            on{" "}
                            <a href="https://unsplash.com/photos/RDolnHtjVCY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                Unsplash
                            </a>
                        </figcaption>
                    </div>
                </div>
                <div>
                    <p>
                        However when I'm not busy bringing my code to life, you
                        can find me behind the lens of a camera...
                    </p>
                </div>
                <div>
                    <p>...Or indulging in some video game action!</p>
                </div>
                <div>
                    <p>
                        So if you're in need of some top-notch code or just want
                        to chat about the latest and greatest in the tech world,
                        don't hesitate to reach out!
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;
