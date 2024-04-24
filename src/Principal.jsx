import React from 'react'
import Techs from './Techs'
import UserCard from './UserCard'

export const Principal = ({tecnologia, usuario}) => {
  return (
    <main>
        <p>Prerequisitos para iniciar en React</p>
        <ul>
            <Techs tecnologia={tecnologia}/>
        </ul>
        <UserCard usuario={usuario}/>
    </main>
  )
}
