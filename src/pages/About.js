import React from "react";

const About = (props) => {
    return (
        <main className={`main about-main ${props.isLight}`}>
            <h1>About</h1>
            <div className={`about-intro ${props.isLight}`}>
                <figure>
                    <img
                        src="./images/profile.jpg"
                        alt="a portrait photo of Yao"
                        className="about-me"
                    ></img>
                    <figcaption className={`${props.isLight}`}>A portrait of Yao Lee</figcaption>
                </figure>
                <div className="intro">
                    <p>
                        &emsp;Hi there! My name is Yao and I'm a Full Stack
                        developer. When I'm not busy bringing my code to life,
                        you can find me behind the lens of a camera, indulging
                        in some video game action, or of course, programming to
                        my heart's content.
                    </p>
                    <br />
                    <p>
                        &emsp;I'm passionate about programming because it allows
                        me to take the ideas swirling around in my head and turn
                        them into something tangible and real. Whether it's a
                        new app or a website, programming gives me the tools to
                        bring my visions to life and share them with the world.
                        So if you're in need of some top-notch code or just want
                        to chat about the latest and greatest in the tech world,
                        don't hesitate to reach out!
                    </p>
                </div>
            </div>
        </main>
    );
};

export default About;
