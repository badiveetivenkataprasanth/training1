import React from 'react'
import './myStyles.css'

function FunctionalComponent(props) {
    let className = props.apply?'heading':'';
  return (
    <div>
        <h1>Welcome to MRU {props.city}, {props.state}</h1>
    </div>
  )
}

export default FunctionalComponent