import React from 'react';

const VerMasButton = ({ link, Spanish }) => {

  return (
    <a href={link} target="__blank">
      <button className="VerMas__button">
        {Spanish ? 'Ver Más' : 'More'}
      </button>
    </a>
  )
}

export default VerMasButton