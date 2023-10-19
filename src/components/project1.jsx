import React from 'react'
import weatherApp from '../assets/weather.jpg'
export default function Project1() {
  return (
    <div>
      <div className="card card-1" style={{width: "15rem", textAlign : "center"}}>
        <img src={weatherApp} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <a href="https://sabbir990.github.io/weather-app" target='_blank' className="btn btn-primary">Visit Application</a>
          </div>
      </div>
    </div>
  )
}
