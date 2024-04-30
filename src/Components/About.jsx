import React from 'react'
import aboutImage from '../assets/about.jpg'

function About() {
  return (
    <div id='about'>
    <div className="about-image">
      <img src={aboutImage} alt="" />
    </div>
    <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptatum, sit vitae reprehenderit architecto nulla laudantium optio molestias ipsam tenetur ad eaque vel cumque corporis reiciendis pariatur autem? Sunt, quidem?</p>
        <button>READ MORE</button>
    </div>
    </div>
  )
}

export default About