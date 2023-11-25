import React, { useEffect } from "react";
import '../index.css';
import developer from '../assets/developer.jpg';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function TopSection() {
    function TypedText() {
        const typedTextRef = React.createRef();

        useEffect(() => {
            const options = {
                strings: ['Front-end React Developer'],
                typeSpeed: 50,
                backSpeed: 25,
            };

            const typed = new Typed(typedTextRef.current, options);

            return () => {
                typed.destroy();
            };
        }, []);

        return <span ref={typedTextRef}></span>;
    }

    return (
        <div className="top-section">
            <div className="animationgif-section">
                <img src={developer} alt="developer" className="developer-image" />
            </div>
            <div className="about-section">
                <h1>Hi, I am <span style={{ color: "#4419b0" }}>Mumammad Alif</span></h1>
                <h2>I am a passionate</h2>
                <h2 className="typed-text"><TypedText /></h2>
                <p>I am a front-end web developer, who developes applications using ReactJS. <br /> I have 1 year of experience in Javascript and ReactJS. <br /> And now I am looking for Jobs. <br /> If you are looking for a front-end developer, <br /> you can contact me in : </p>

                <a href="https://www.linkedin.com/in/muhammad161/" target="_blank"><FaLinkedin size={32} /></a>
                <a href="https://github.com/sabbir990" target="_blank" style={{ marginLeft: "20px" }}><FaGithub size={32} style={{ color: "black" }} /></a>
                <div className="icon-underline">

                </div>
                <div className="btn-div">
                    <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:a73de05e-b2cc-4c1a-b948-d4e2495a4528' className="download-button" target="_blank">Download my resume</a>
                </div>
            </div>
        </div>
    )
}
export default TopSection;