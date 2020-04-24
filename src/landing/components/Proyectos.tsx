import React from 'react';

import Proyecto from './Proyecto'

import ilustracion_1 from './assets/ilustraciones/IDAHOT 19-80.jpg'
import ilustracion_2 from './assets/ilustraciones/Stonewall copia 2-80.jpg'
import ilustracion_3 from './assets/ilustraciones/Mesa de trabajo 1-80.jpg'
import proyecto_1 from './assets/projects/clique.jpg'
import proyecto_2 from './assets/projects/pokeball.jpg'
import proyecto_3 from './assets/projects/platzi-video.png'
const link_1 = 'https://www.behance.net/gallery/88171861/IDAHOT-2019?'
const link_2 = 'https://www.behance.net/gallery/88157939/50-anos-de-Orgullo-LGBTTTI'
const link_3 = 'https://www.behance.net/gallery/76975885/Ilustracion-ZeroDiscriminationDay'
const link_4 = 'https://jesuswisord.github.io/clique/'
const link_5 = 'https://jesuswisord.github.io/Pokedex/'
const link_6 = 'https://jesuswisord.github.io/platzi-video/'

const Proyectos = ({ Spanish }) => {
  return (
    <React.Fragment>
      <section className="Proyectos__section" id="Proyectos">
        <h2 className="Proyectos__title">Proyectos</h2>
        <div className="Proyectos">
          <Proyecto Spanish={Spanish} url={ilustracion_1} title="IDAHOT 2019" link={link_1} />
          <Proyecto Spanish={Spanish} url={ilustracion_2} title="Stonewall" link={link_2} />
          <Proyecto Spanish={Spanish} url={ilustracion_3} title="Cero Discriminación" link={link_3} />
          <Proyecto Spanish={Spanish} url={proyecto_1} title="Clique Web (Maquetado)" link={link_4} />
          <Proyecto Spanish={Spanish} url={proyecto_2} title="Pokédex" link={link_5} />
          <Proyecto Spanish={Spanish} url={proyecto_3} title="Platzi Video" link={link_6} />
        </div>
      </section>
    </ React.Fragment>
  )
}

export default Proyectos;