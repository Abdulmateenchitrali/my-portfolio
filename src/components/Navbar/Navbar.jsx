import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="name">Ma<span className='n-333'>333</span></div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul className='n-navigation'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experiance</li>
                        <li>Portfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <button className="button n-button">Contact me</button>
            </div>
        </div>
    );
}

export default Navbar