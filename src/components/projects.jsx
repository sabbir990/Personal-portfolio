import React from "react";
import '../index.css'
import projectInformations from "./ProjectInformations";
// import description from "./ProjectDescription";
import Project from "./Project";
import ProjectDesc from "./ProjectDesc";
function Projects() {
    return (
        <div>
            <div className="projects-heading">
                <h2>Projects</h2>
                <h4>That are made by me</h4>
            </div>
            <div className="underline-projects">

            </div>
            <br /><br />
            <div className="card-div">
                {projectInformations.map((infos) => {
                    return (
                        <div className="project-single-divs">
                            <Project id={infos.id} image={infos.image} title={infos.title} link={infos.link} />
                            <div style={{height : "30px"}}>

                            </div>
                            <ProjectDesc description={infos.description}/><br /><br />
                            {/* <div style={{height : '20px'}}>

                            </div> */}
                            <div className="underline-projects">

                            </div>
                            <div style={{height : '50px'}}>

                            </div>
                        </div>
                        
                    )
                })}
            </div>

        </div>
    )
}
export default Projects;