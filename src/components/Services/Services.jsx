import React from 'react'
import "./Services.css"
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
         <span>My awesome</span>
         <span>Services</span>
         <span>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Dolorem architecto ipsa illo iusto. Excepturi, ea.
         </span>
         <button className="button s-button">Download Cv</button>
         <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            I am the right Side
        </div>
    </div>
  )
}

export default Services