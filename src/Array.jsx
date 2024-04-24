import React from 'react'

const Array = ({numeros}) => {
 const list = numeros.map(numero=> <li>{numero}</li>)
    return list
}

export default Array