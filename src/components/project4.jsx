import React from 'react'
import '../index.css';
import calculator from '../assets/calculator.jpg'

export default function Project4() {
    return (
        <div>
            <div className="card card-4" style={{width: "15rem", textAlign: "center"}}>
                <img src={calculator} className="card-img-top" alt="calculator" style={{borderBottom : "1px solid black"}} />
                    <div className="card-body">
                        <h5 className="card-title">Calculator App</h5>
                        <a href="https://sabbir990.github.io/calculator/" target='_blank' className="btn btn-danger">Visit Application</a>
                    </div>
            </div>
        </div>
    )
}
