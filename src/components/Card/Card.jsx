import React from 'react'
import './Card.css'

const Card = ({emoji,heading, detail}) => {
  return (
    <div className="card" style={{left:"14rem"}}>
        <img src={emoji} alt="Emojii" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>Learn More..</button>
    </div>
  )
}

export default Card