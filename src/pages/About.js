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
                        <img
                            src="./images/stack.jpg"
                            alt="a boy stacking bricks"
                            className="about-me brickboy"
                        ></img>
                    </div>
                    <div>
                        <p>
                            My name is Yao and I'm a Full Stack Developer from
                            California.
                        </p>
                    </div>
                </div>
                <div className="about-intro3">
                    <div>
                        <p>
                            &emsp;I have a strong passion for programming as it
                            allows me to take the ideas swirling around in my
                            head and turn them into something real. It's like a
                            superpower I wish I had... maybe... maybe one day...
                            <br />
                            <br />
                            Whether it's a new app or a website, programming
                            brings me joy and helps me bring my visions to life
                            so I can share them with the world.
                        </p>
                    </div>
                    <div className="about-intro3-img">
                        <img
                            src="./images/laptop.jpg"
                            alt="laptop balanced on a fingertip"
                            className="about-me"
                        ></img>
                    </div>
                </div>
                <div className="about-intro4">
                    <div className="about-intro4-img">
                        <img
                            src="./images/me-photo.jpg"
                            alt="self portrait of Yao Lee taking photo of himself"
                            className="about-me meCamera"
                        ></img>
                    </div>
                    <div>
                        <p>
                            However when I'm not busy bringing my code to life,
                            you can find me behind the lens of a camera...
                        </p>
                    </div>
                </div>
                <div className="about-intro5">
                    <div>
                        <p>...Or indulging in some video game action!</p>
                    </div>
                    <div className="about-intro5-img">
                        <img
                            src="./images/gamemania.jpg"
                            alt="man infront of a game store"
                            className="about-me"
                        ></img>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            So if you're in need of some top-notch code or just
                            want to chat about the latest and greatest in the
                            tech world, don't hesitate to reach out!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
