import './App.css'
import Header from './Header'
import Footer from './Footer'
import { Principal } from './Principal'
import Boton from './Boton'
import User from './User'
import Array from './Array'
import Skill from './Skill'
import { Paises } from './Paises'


const Edad =(props)=> <div>La persona tiene {props.edad} años</div>
const Peso =(props)=> <p>
  El peso de un objeto en la tierra es {props.peso}
</p>
const Estado = (props)=>{
  let estado = props.estado ? 'Puedes votar': 'No puedes votar'
  return <p>{estado}</p>

}
const Skills = ({skills})=> {
  const skillList=skills.map((skill)=> <Skill skill={skill}/>)
  return <ol>{skillList}</ol>
}
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
  const techs =['HTML','CSS','JAVASCRIPT','React']
  const usuario ={...dato.autor, imagen:'https://rickandmortyapi.com/api/character/avatar/143.jpeg'}
  const skills = [
    ['HTML','10 🏋️‍♀️'],
    ['CSS',7],
    ['JavaScript',9],
    ['React',8],
  ]
  const paises = [
    { nombre: "Argentina", ciudad: "Buenos Aires" },
  { nombre: "Bolivia", ciudad: "Sucre" },
  { nombre: "Chile", ciudad: "Santiago de Chile" },
  { nombre: "Finlandia", ciudad: "Helsinki" }
  ]
  
  return (
  <>
  <ol>
  <Array numeros={[1,2,3,4]}/>

  </ol>
  <Edad edad={edad}></Edad>
  <Peso peso={gravedad * masa}/>
  <Estado estado={estado}/>
  <Header dato={dato}/>
  <Principal tecnologia={techs} usuario={usuario}/>
  <Footer/>
  <Boton texto='hazme click' onClick={decirHola} />
  <Boton texto='Ver la hora' onClick={()=>alert(new Date())} />
<User firstName = 'juana' lastName='ramirez' country='peru'/>
  <Skills skills={skills}/>
  <h2>Paises</h2>
  <ul>
  <Paises paises={paises}/>

  </ul>
  </>
  )
}

export default App
