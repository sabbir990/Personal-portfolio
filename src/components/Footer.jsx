import React from 'react'
import '../index.css'
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
    const handleUpClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className='footer'>
            <footer>
                <div className="footer-content">
                    <div className="contact">
                        <h4>Contact Me</h4>
                        <p>Email: muhammadsabbirkhanalif@gmail.com</p>
                    </div>
                    <div className="social">
                        <h4>Follow Me</h4>
                        <a href="https://www.linkedin.com/in/muhammad161/" target='_blank'>LinkedIn</a>
                        <a href="https://github.com/sabbir990" target='_blank' style={{marginLeft : "10px"}}>GitHub</a>
                    </div>
                    <button className='up-btn' onClick={handleUpClick}><FaArrowUp /></button>
                </div>
                <div className="copyright">
                    <p>© 2023 Muhammad Sabbir Khan Alif</p>
                </div>
            </footer>
        </div>
    )
}
