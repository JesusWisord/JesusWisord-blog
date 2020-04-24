import React from 'react'
import '../css/Translation.css'

const TranslationButton = ({ Spanish, handleClick }) => {
  return(
    <button onClick={() => handleClick(!Spanish) } className="Translation__button">
      {Spanish ? 'Translate' : 'Traducir'}
    </button>
  )
}

export default TranslationButton;