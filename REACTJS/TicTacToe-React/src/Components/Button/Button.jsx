import React from 'react'
import "./Button.css";

function Button({text, onClick, style}) {
  return (
    <button style={style} className='gameBtn' onClick={onClick}>{text}</button>
  )
}

export default Button
