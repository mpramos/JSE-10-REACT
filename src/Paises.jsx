import React from 'react'
import Pais from './Pais'

export const Paises = ({paises}) => {
    const listPaises = paises.map(pais=> <Pais pais={pais}/>)
  return (
   <>
   {listPaises}
   </>
  )
}
