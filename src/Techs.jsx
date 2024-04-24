import React from 'react'

const Techs = ({tecnologia}) => {
 
  const techFormated = tecnologia.map( tech=> <li key={tech}>{tech}</li>)
  return (
    techFormated
  )
}

export default Techs