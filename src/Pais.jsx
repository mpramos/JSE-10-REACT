import React from 'react'

const Pais = ({pais:{nombre,ciudad}}) => {
  return (
    <li>
        {nombre} {ciudad}
    </li>
  )
}

export default Pais