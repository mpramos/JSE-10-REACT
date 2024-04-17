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
  return (
<header style={headerStyles}>
    <h1>{props.dato.bienvenida}</h1>
    <h2>{props.dato.titulo}</h2>
    <h3>{props.dato.subtitulo}</h3>
    <p>{props.dato.autor.nombre} {props.dato.autor.apellido}</p>
    <small>{showDate(props.dato.date)}</small>
</header>
  )
}

export default Header