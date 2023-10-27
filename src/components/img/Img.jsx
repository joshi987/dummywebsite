import React from 'react'
import Imgs from '../img/Girl.png'
import './imges.css'

function Img() {
  return (
    <span className='girl'>
<img className='imge' src={Imgs} alt="Not available" />
    </span> 
  )
}

export default Img