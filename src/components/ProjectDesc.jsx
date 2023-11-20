import React from 'react'
import '../index.css'

export default function ProjectDesc({ description }) {
    const handleButtonClicked = () => {
        window.open(description.howToRun)
    }
    return (
        <div className='project1desc'>
            <h3 className='card-1-title'>{description.projectTitle}</h3>
            <div className='disc1-underline'>

            </div><br />
            <h4>Description</h4>
            <p>{description.description}</p>
            <h4>Key Features</h4>
            <p>{description.keyFeatures}</p>
            <h4>Technologies Used : </h4>
            <p>{description.technologies}</p>
            <button onClick={handleButtonClicked} className="description-button">Visit Application</button>
        </div>
    )
}
