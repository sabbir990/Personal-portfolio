import React from "react";
import '../index.css'
import Project1 from "./project1";
import Project1desc from "./project1desc";
import Project2 from "./project2";
import Project2desc from "./project2desc";
import Project3 from "./Project3";
import Project3desc from "./Project3desc";
import Project4desc from "./project4desc";
import Project4 from "./project4";
function Projects() {
    return (
        <div>
            <div className="projects-heading">
                <h2>Projects</h2>
                <h4>That are made by me</h4>
            </div>
            <div className="underline-projects">

            </div>
            <div className="card-div">
                <div className="project-1">
                    <Project1 />
                    <Project1desc />
                </div>
                <div className="underline-projects-1">

                </div>
                <div className="project-2">
                    <Project2desc />
                    <Project2 />
                </div>
                <div className="underline-projects-2">

                </div>
                <div className="project-3">
                    <Project3 />
                    <Project3desc />
                </div>
                <div className="underline-projects-3">

                </div>
                <div className="project-4">
                    <Project4desc />
                    <Project4 />
                </div>
            </div>
        </div>
    )
}
export default Projects;