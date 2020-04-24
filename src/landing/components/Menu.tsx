import React from 'react';
import TranslationButton from './TranslationButton'

const Menu = ({ Spanish, handleClick }) => {

  return (
    <nav className="menu">
      <ul>
        <TranslationButton Spanish={Spanish} handleClick={(value)=> handleClick(value)} /> 
        <li className="menu__item"> <a href="#"> { Spanish ? 'Inicio' : 'Start'} </a> </li>
        <li className="menu__item"> <a href="#Me"> { Spanish ? 'Sobre mí' : 'About me'} </a> </li>
        <li className="menu__item"> <a href="#Proyectos"> { Spanish ? 'Proyectos' : 'Projects'} </a> </li>
      </ul>
    </nav>
  )
}

export default Menu;