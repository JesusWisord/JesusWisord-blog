import React from 'react';

import VerMasButton from './VerMasButton'

const Proyecto = ({ url, title, link, Spanish }) => {
  return (
    <div className="Proyecto">
      <img src={url} />
      <p> {title} </p>
      <VerMasButton link={link} Spanish={Spanish} />
    </div>
  )
}

export default Proyecto 