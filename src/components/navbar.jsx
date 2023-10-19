import React, { useState } from "react";
import '../index.css'
function Navbar({getInfo}) {
    const [count, setCount] = useState(0)
    const handleHomeClick = () => {
        setCount(1)
        getInfo(1)
    }
    const handleProjectsClick = () => {
        setCount(2)
        getInfo(2)
    }
    const handleAboutmeClick = () => {
        setCount(3)
        getInfo(3)
    }
    return (
        <div className="navbar">
            <div className="title-section">
                <p>Muhammad's portfolio</p>
            </div>
            <div className="nav-section">
                <ul>
                    <li>

                        <a href="#" onClick={handleHomeClick} style={{color : count === 1 && "#c70e20"}}>Home</a>

                    </li>
                    <li><a href="#" onClick={handleProjectsClick} style={{color : count === 2 && "#c70e20"}}>Projects</a></li>
                    <li><a href="#" onClick={handleAboutmeClick} style={{color : count === 3 && "#c70e20"}}>About me</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;