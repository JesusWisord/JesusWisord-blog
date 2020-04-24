import React from 'react';

import facebook from './assets/social/facebook-icon.png'
import twitter from './assets/social/twitter-icon.png'
import instagram from './assets/social/instagram-icon.png'
import github from './assets/social/github-icon.svg'

const Header = ({ logo }) => {
  return (
    <div className="header">
      <div className="header__top">
        <img src={logo} />
      </div>
      <div className="header__bottom">
        <a href="https://www.facebook.com/JesusWisord/" target="__blank"><img src={facebook} /></a>
        <a href="https://instagram.com/JesusWisord" target="__blank"><img src={instagram} /></a>
        <a href="https://github.com/JesusWisord" target="__blank"><img src={github} /></a>
        <a href="https://twitter.com/JesusWisord" target="__blank"><img src={twitter} /></a>
      </div>
    </div>
  )
}


export default Header;
