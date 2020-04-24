import React from 'react';


const Hero = ({ Spanish }) => {
  return (
    <div className="hero__title">
      <h1>Jesús Wisord <br /> {Spanish ? 'Desarrollador Frontend'
      : 'Frontend Developer'} </h1>
    </div>
  )
}

export default Hero