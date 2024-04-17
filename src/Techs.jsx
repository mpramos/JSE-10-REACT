import React from 'react'

const Techs = () => {
  const techs =['HTML','CSS','JAVASCRIPT']
  const techFormated = techs.map( tech=> <li key={tech}>{tech}</li>)
  return (
    techFormated
  )
}

export default Techs