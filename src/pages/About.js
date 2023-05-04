import React from "react";

const About = (props) => {
    return (
        <main className={`main about-main${props.isLight}`}>
            <h1>About</h1>
            <div className={`about-intro${props.isLight}`}>
                <img
                    src="./images/about-me.jpg"
                    alt="a portrait photo of Yao"
                    className="about-me about-photo"
                ></img>
                <div className="intro">
                    <p>Hi there!</p>
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
                    <div className="about-text-right">
                        <p>
                            My name is<span className="text-name"> Yao </span>
                            and I'm a
                            <span className="text-fsd font-bolder">
                                {" "}
                                Full Stack Developer{" "}
                            </span>
                            from
                            <span className="text-location font-italic">
                                {" "}
                                California
                            </span>
                            .
                        </p>
                    </div>
                </div>
                <div className="about-intro3">
                    <div className="about-text-left">
                        <p>
                            &emsp;I have a
                            <span className="clr-white font-bold font-2">
                                {" "}
                                strong passion{" "}
                            </span>
                            for programming as it allows me to take the ideas
                            swirling around in my head and turn them into
                            something real. It's like a
                            <span className="text-superpower font-italic font-bolder font-2">
                                {" "}
                                superpower{" "}
                            </span>
                            I wish I had... maybe... maybe one day...
                            <br />
                            <br />
                            Whether it's a new app or a website, programming
                            brings me joy and helps me bring my
                            <span className="clr-white font-2"> visions </span>
                            to life so I can share them with the
                            <span className="text-world font-2 font-bold font-italic">
                                {" "}
                                world
                            </span>
                            .
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
                            className="about-me me-camera"
                        ></img>
                    </div>
                    <div className="about-text-right">
                        <p>
                            However when I'm not busy bringing my{" "}
                            <span className="text-code font-bold"> code </span>
                            to life, you can find me behind the lens of a{" "}
                            <span className="text-camera font-bolder">
                                {" "}
                                camera
                            </span>
                            ...
                        </p>
                    </div>
                </div>
                <div className="about-intro5">
                    <div className="about-text-left">
                        <p>
                            ...Or indulging in some
                            <span className="clr-white font-2">
                                {" "}
                                video game{" "}
                            </span>{" "}
                            action!
                        </p>
                    </div>
                    <div className="about-intro5-img">
                        <img
                            src="./images/gamemania.jpg"
                            alt="man infront of a game store"
                            className="about-me me-game"
                        ></img>
                    </div>
                </div>
                <div className={`about-intro6${props.isLight}`}>
                    <div className="about-text">
                        <p>
                            So if you're in need of some
                            <span className={`text-notch${props.isLight}`}>
                                {" "}
                                top-notch
                            </span>{" "}
                            code or just want to chat about the latest and
                            greatest in the
                            <span
                                className={`text-tech font-italic font-bold font-4${props.isLight}`}
                            >
                                {" "}tech{" "}
                            </span>
                            world, don't hesitate to reach out!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
