import React from 'react'
import "./InputCell.css"

function InputCell({cellIndex, onClick}) {
  return (
    <div cellIndex={cellIndex} onClick={onClick} className='cell'>
      
    </div>
  )
}

export default InputCell
