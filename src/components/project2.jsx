import React from 'react';
import crypto from '../assets/crypto.jpg'

export default function Project2() {
    return (
        <div className='card-2'>
            <div className="card" style={{width: "15rem", textAlign: "center"}}>
                <img src={crypto} className="card-img-top" alt="crypto" />
                    <div className="card-body">
                        <h5 className="card-title">Crypto Currency App</h5>
                        <a href="https://sabbir990.github.io/crypto-currency/" target='_blank' className="btn btn-success">Visit Application</a>
                    </div>
            </div>
        </div>
    )
}
