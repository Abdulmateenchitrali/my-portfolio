import React from 'react'
import './Work.css'
import Fiver from '../../img/fiver.png'
import Upwork from '../../img/Upwork.png'
import Linkedin from '../../img/linkedin.png'
import Facebook from '../../img/facebook.png'
import Shopify from '../../img/Shopify.png'

const Work = () => {

    return (
        <div className="works">
            <div className="awesome">
                <span>Work for all these</span>
                <span>Brands & Clients</span>
                <span>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, officiis! <br />
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolor. <br />
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, voluptas! <br /> 
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, consequatur.
                </span>
                    <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1" style={{ background: "var(--purple" }}>
                </div>
            </div>
            {/* Right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Fiver} alt="Fiver" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Upwork} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Linkedin} alt="Linkedin" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="Facebook" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="Shopify" />
                    </div>
                </div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work