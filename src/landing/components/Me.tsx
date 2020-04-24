import React from 'react';

import VerMasButton from './VerMasButton'
const link = "http://medium.com/@jesuswisord"

const Me = ({ ts, lgbt, Spanish }) => {
  return (
    <section className="SobreMi" id="Me">
      <h2>Sobre Mi</h2>
      <div className="SobreMi__text__left">
        <img src={ts} className="SobreMi__logo" />
        <p>
          { Spanish ? `Hago páginas web en Toluca como desarrollador frontend e ilustraciones con Illustrator.
          Comencé desarrollando en Vanilla Javascript, ahora me encuentro aprendiendo TypeScript para mejorar mis proyectos.
          Me especializo en React.js. Me apasionan los temas tecnológicos.` : `I develop webpages as a frontend developer and make
          illustrations using Adobe Illustrator. I started developing using Vanilla Javascript and now I'm learning Typescript
          in order to improve my projects. I'm specialized in React.js. I feel passion about tech topics`}
        </p>
      </div>
      <div className="SobreMi__text__right">
        <p>
          {Spanish ? `En mi tiempo libre me dedico al activismo por derechos humanos LGBTTTI.
          Quiero ser un cambio para mi población.
          Me fascina seguir aprendiendo sobre temas relacionados con la diversidad sexual.` : `
          In my free time I do activism for human rights regarding to LGBTTTI people. I want to be a change
          for others like me. I love to keep learning in topics about sexual diversity.`}


        </p>
        <img src={lgbt} className="SobreMi__logo" />
      </div>
      <div className="SobreMi__button">
        <VerMasButton link={link} Spanish={Spanish} />
      </div>
    </section>
  )
}

export default Me;