import React, { useState } from 'react'

const Formulario = () => {
    const [text,setText] = useState('')
    const handleChange =(event)=>{
        setText(event.target.value)
    }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <p> Texto ingresado : {text}</p>
    </div>
  )
}

export default Formulario