import React, { useState } from 'react';

import Header from '../components/Header'
import Menu from '../components/Menu'
import Hero from '../components/Hero'
import Me from '../components/Me'
import Proyectos from '../components/Proyectos'
import Card from '../components/Card'
import logo from '../components/assets/logo.png'
import typescript from '../components/assets/social/typescript.png'
import lgbt from '../components/assets/social/lgbt.png'
import reactIcon from '../components/assets/social/react.png'
import illustratorIcon from '../components/assets/social/illustrator.png'
import Footer from '../components/Footer'

const Landing = () => {
  const [spanish, setSpanish] = useState(true)

  const handleClick = (value) => {
    setSpanish(value);
  }

  // const showCards = (spanish) => {
  //   const card1 = '';
  //   const card2 = '';
  //   if (spanish){
  //     card1 = <Card typeClass={null} title="Desarrollo Web" content="HTML, CSS y Javascript (React.js)" img={reactIcon} />;
  //     card2 = <Card typeClass="Left" title="Ilustración" content="Ilustraciones hechas con Illustrator" img={illustratorIcon} />;
  //    }
  //    else {
  //     card1 = <Card typeClass={null} title="Web Development" content="HTML, CSS y Javascript (React.js)" img={reactIcon} />;
  //     card2 = <Card typeClass="Left" title="Illutration" content="Illutrations made with Adobe Illustrator" img={illustratorIcon}) />;
  //    }
  //    const cards = card1 + card2;
  //    return cards
  // }

  return (
    <React.Fragment>
      <div className="main">
        <Header logo={logo} />
        <div className="main_right">
          <div className="hero">
            <Menu Spanish={spanish} handleClick={(value) => handleClick(value)} />
            <Hero Spanish={spanish} />
          </div>
          { spanish ? 
            <Card typeClass={null} title="Desarrollo Web" content="HTML, CSS y Javascript (React.js)" img={reactIcon} />
            :
            <Card typeClass={null} title="Web Development" content="HTML, CSS y Javascript (React.js)" img={reactIcon} />
          }
          { spanish ? 
            <Card typeClass="Left" title="Ilustración" content="Ilustraciones hechas con Illustrator" img={illustratorIcon} />
            :
            <Card typeClass="Left" title="Illustration" content="Illustrations made with Adobe Illustrator" img={illustratorIcon} />
          }
          <Me ts={typescript} lgbt={lgbt} Spanish={spanish} />
          <Proyectos Spanish={spanish} />
        </div>
        <Footer />
      </div>
    </ React.Fragment >
  )
}

export default Landing;