import React from 'react'

const buttonStyles ={
    padding:'10px 20px',
    background:'rgb(0,255,0)',
    border:'none',
    borderRadius:5
}

const Boton = (props) => {
  return (
    <>
    <button onClick={props.onClick}>{props.texto}</button>
    </>
  )
}

export default Boton










































