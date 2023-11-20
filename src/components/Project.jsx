import React from 'react'
export default function Project({ image, title, link }) {
    return (
        <div>
            <br />
            <div className="card card-1" style={{ width: "15rem", textAlign: "center" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={link} target='_blank' className="btn btn-primary">Visit Application</a>
                </div>
            </div>
        </div>
    )
}
