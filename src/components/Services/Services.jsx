import React from 'react'
import "./Services.css"
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import mateenCv from './mateenCv.pdf'
const Services = () => {
  return (
    <div className="services">
      {/* Left side */}
      <div className="awesome">
        <span>My attractive</span>
        <span>Services</span>
        <span>
          I can build a stunning portfolio of your brand. You may streamline your
          online eCommerce business with good conceptualisation, back-end development, and customisation. Unlike other solutions, our top-of-the-line eCommerce Solutions provide you with a higher Search Engine ranking and more sales traffic in a friendly environment. We provide essential highlights and adaptable  solutions to helpyou thrive in your online business. Furthermore, our eCommerce Website services provide industry-leading speed with excellent conversion rates.
        </span>
        <a href={mateenCv} download>
          <button className="button s-button">Download Cv</button>
        </a>
        <div className="blur s-blur1" style={{background:"var(--purple"}}></div>
      </div>
      {/* Right */}
      <div className="cards">
        <div style={{ left: "-18rem" }}>
          <Card
            emoji={Heartemoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Illustrator, Adobe XD"}
          />
        </div>
        <div style={{ top: "16rem", left: "-25rem" }}>
          <Card
            emoji={Glasses}
            heading={"Front End"}
            detail={"HTML, CSS, Bootstrap, TailwindCss, React Js"}
          />
        </div>
        <div style={{ top: "16rem", left: "-10rem" }}>
          <Card
            emoji={Humble}
            heading={"Back End"}
            detail={"Laravel, RestAPI, MYSQL, Nodejs, Express Js"}
          />
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
      </div>
    </div>
  )
}

export default Services