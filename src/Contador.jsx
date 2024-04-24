import React,{useState} from 'react'

const Contador = () => {
    const [count,setCount] = useState(0)
    const addOne =()=>{
        let value = count +1
        setCount(value)
    }
    const minusOne =()=>{
        let value = count -1
        setCount(value)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={addOne}>Add One</button>
        <button onClick={minusOne}>Add One</button>
    </div>

  )
}

export default Contador