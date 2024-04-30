import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../assets/1.svg'
import fimage2 from '../assets/2.svg'
import fimage3 from '../assets/3.svg'
import fimage4 from '../assets/4.svg'


function Features() {
  return (
    <div id='features'>
       <h1>FEATURES</h1>
       <div className="a-container">
        <Featurebox image={fimage1} title=""/>
        <Featurebox image={fimage2} title=""/>
        <Featurebox image={fimage3} title=""/>
        <Featurebox image={fimage4} title=""/>
       </div>
    </div>
  )
}

export default Features