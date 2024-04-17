import React from 'react'
import Techs from './Techs'
import UserCard from './UserCard'

export const Principal = () => {
  return (
    <main>
        <p>Prerequisitos para iniciar en React</p>
        <ul>
            <Techs/>
        </ul>
        <UserCard/>
    </main>
  )
}
