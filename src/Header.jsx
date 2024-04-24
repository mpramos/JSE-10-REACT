import React from 'react'


const headerStyles = {
  backgroundColor:'#61DBFB',
  fontFamily:'Helvetica Neue',
  padding:25,
  lineHeight:1.5
}

const showDate =(time)=>{
  const meses =[
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octure',
    'Noviembre',
    'Diciembre',
  ]
  const mes = meses[time.getMonth()].slice(0,3) 
  const año = time.getFullYear();
  const dia = time.getDate();
  return `${dia} ${mes} ${año}`
}
const Header = (props) => {
  const dato= props.dato
  const {bienvenida,titulo,subtitulo,autor,date} = dato
  const {nombre, apellido} = autor
  return (
<header style={headerStyles}>
    <h1>{bienvenida}</h1>
    <h2>{titulo}</h2>
    <h3>{subtitulo}</h3>
    <p>{nombre} {apellido}</p>
    <small>{showDate(props.dato.date)}</small>
</header>
  )
}

export default Header