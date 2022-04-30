import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Facebook from '../../img/facebook.png'
import Stackoverflow from '../../img/stackoverflow.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassimojii from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>H1! I am</span>
                    <span>Abdul Mateen</span>
                    <span>
                        I am a programmer focused mainly on senior software engineers building data and debugging codes. And because elements are crucial to system functioning, its correctness depends on the quality of the back-end developer’s work.I have done my master’s in Computer Science from Islamia College, Peshawar.
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a>
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="">
                        <img src={Facebook} alt="Fac3ebook" />
                    </a>
                    <a href="">
                        <img src={Stackoverflow} alt="StackOverflow" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={Boy} alt="Mateen.png" />
                <div>
                    <FloatingDiv />
                </div>
            </div>
        </div>
    )
}

export default Intro