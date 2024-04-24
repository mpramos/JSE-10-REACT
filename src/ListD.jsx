import React, { useState } from 'react'

const ListD = () => {
    const [items,setItems] = useState([])
    const [nuevoItem,setNuevoItem] = useState('')
    const agregarItem=()=>{
        if (nuevoItem.trim()!=='') {
            setItems([...items,nuevoItem])
            setNuevoItem('')
        }
    }
  return (
    <>
    <input 
        type="text"
        value={nuevoItem}
        onChange={(e)=>setNuevoItem(e.target.value)}
        />
    <button onClick={agregarItem}>Agregar</button>
    <ul>
        {items.map((item,index)=>(<li key={index}>{item}</li>))}
    </ul>
    </>

  )
}

export default ListD