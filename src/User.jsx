import React from 'react'

const User = (props) => {
  return (
   <div>
    <h1>
        {props.firstName}
    </h1>
    <h2>
        {props.lastName}
    </h2>
    <small>{props.country}</small>
   </div>
  )
}

export default User