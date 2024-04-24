import React from 'react'

function UserCard({usuario: {nombre,apellido,imagen}}) {
  return (
   <>
   <img src={imagen} alt={imagen} />
   <h2>{nombre}</h2>
   <h2>{apellido}</h2>
   </>
  )
}

export default UserCard