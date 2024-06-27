import "./Timer.css";
import React from 'react'

const Timer = ({ time }) => {
  return (
    <div className='timer-container'>      
      <h3>Hora actual</h3>
      { time }
    </div>
  )
}

export default Timer