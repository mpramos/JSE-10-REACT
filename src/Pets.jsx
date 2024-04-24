import React, { useState } from 'react'

const Pets = () => {
    const url ='https://http.cat/images/408.jpg'
    const [image,setImage]=useState(url)
let changeCat =()=>{
    let catOneURL = 'https://http.cat/images/408.jpg'
    let catTwoURL = 'https://http.cat/images/411.jpg'
    let result = image === catOneURL ? catTwoURL : catOneURL
    setImage(result)
}
  return (
    <>
    <div>Pets</div>
    <div>
    <img src={image} alt="" />
    </div>

    <button onClick={changeCat}> change</button>
    </>

  )
}

export default Pets