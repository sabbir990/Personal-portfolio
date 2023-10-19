import React from 'react'
import '../index.css';
import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaPython, FaDatabase, FaGit, FaGithub } from 'react-icons/fa';

export default function Skills() {
    return (
        <div className='skills'>
            <h3>Skills</h3>
            <div className='skills-underline'>

            </div>

            <h5>Skills that I have is :

                <div className='underline-listing'>

                </div>

                <section className='demo-section'>

                </section>

                <p>[<FaHtml5 />] HTML <progress max="100" min="0" value="80"></progress> (80%) <br /> [<FaCss3 />] CSS <progress max={100} min={0} value={60}></progress> (60%) <br /> [<FaBootstrap />] Bootstrap5 <progress max={100} min={0} value={70}></progress> (70%) <br /> [<FaJs />] Javascript <progress max={100} min={0} value={70}></progress> (70%) <br /> [<FaReact />] ReactJS <progress max={100} min={0} value={80}></progress> (80%) <br /> [<FaPython />] Python (I've learnt Python 2 years ago, that's why I am not sure about that!) <br /> [<FaDatabase />] SQL (I've learnt MySQL 2 years ago, that's why I am not sure about that!) <br /> [<FaGit />] Git & [<FaGithub />] Github <progress max={100} min={0} value={50}></progress> (50%)</p></h5>

                
        </div>
    )
}
