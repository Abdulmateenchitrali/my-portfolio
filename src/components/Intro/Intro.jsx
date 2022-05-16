import React, { useContext } from 'react'
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
import Glassimojii from '../../img/emoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
const Intro = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={darkMode ? {color:"white"}:''}>H1! I am</span>
                    <span>Abdul Mateen</span>
                    <span style={darkMode ? {color:"white"}:''}>
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
                <img src={Glassimojii} alt="Mateen.png" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv
                        image={Crown}
                        text1="Web"
                        text2="Developer"
                    />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv
                        image={Thumbup}
                        text1="Best Design"
                        text2="Award"
                    />
                </div>
                <div 
                className="blur" 
                style={{ background: "rgb(236 210 255)" }}>
                </div>
                <div 
                className="blur" 
                style={{ 
                    background: "#C1F5FF",
                    top:"17rem",
                    width:"21rem",
                    height:"11rem",
                    left:"-9rem"
                    }}>
                </div>
            </div>
        </div>
    )
}

export default Intro