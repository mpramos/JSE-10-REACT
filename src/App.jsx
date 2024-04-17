import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import { Principal } from './Principal'
import Boton from './Boton'
import User from './User'


const Edad =(props)=> <div>La persona tiene {props.edad} años</div>
const Peso =(props)=> <p>
  El peso de un objeto en la tierra es {props.peso}
</p>
const Estado = (props)=>{
  let estado = props.estado ? 'Puedes votar': 'No puedes votar'
  return <p>{estado}</p>

}
const Skills = (props)=>props.skills.map((skill)=><li>{skill}</li>)



function App() {
  let añoActual=2024
  let añoNacimiento = 1997
  const edad= añoActual-añoNacimiento
  const gravedad = 9.81
  const masa=75
  let estado = edad >= 18
  const dato={
    bienvenida:'Bienvenidos a React',
    titulo:'Iniciando en React',
    subtitulo:'Libreria de JavaScript',
    autor:{
      nombre:'Carla',
      apellido:'Rodriguez'
    },
    date: new Date()
  }
  const decirHola=()=>alert('Hola 👩‍🏫😎')
  return (
  <>
  <Edad edad={edad}></Edad>
  <Peso peso={gravedad * masa}/>
  <Estado estado={estado}/>
  <Skills skills={['HTML','CSS','JAVASCRIPT']}/>
  <Header dato={dato}/>
  <Principal/>
  <Footer/>
  <Boton texto='hazme click' onClick={decirHola} />
  <Boton texto='Ver la hora' onClick={()=>alert(new Date())} />
<User firstName = 'juana' lastName='ramirez' country='peru'/>
  </>
  )
}

export default App
