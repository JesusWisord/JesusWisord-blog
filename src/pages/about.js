import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Layout } from '../components/common'
import './styles/about.scss'

const AboutPage = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div className="container">
                <h1>Hola, soy Jesús Wisord</h1>
                <div className="about-container">
                    <img 
                        src={data.AboutMe.childImageSharp.fluid.src} 
                        alt="Foto de JesúsWisord con una badera LGBT"
                        className="about-image"
                    />
                    <p className="about-text">
                        Hola! Me llamo Jesús Duarte, pero en internet soy conocido como Jesús 
                        Wisord.
                        <br/>
                        <br/>
                        Soy un desarrollador de software, actualmente especializado en JavaScript.
                        Mi tiempo libre lo dedico a ser activista por Derechos Humanos, enfocándome
                        en la población LGBTTTI. Me fascina aprender cosas relacionadas con tecnología,
                        temas sociales, matemáticas y diseño. 
                        <br/>
                        <br/>
                        Este blog surge de la idea de siempre compartir el conocimiento.
                        Principalmente temas que necesitan más visibilidad cómo todo 
                        lo relacionado con diversidad sexual. Pero también nace por el 
                        deseo de tener un lugar dónde compartir mis experiencias y las 
                        historias que a veces suelo escribir.
                        <br/>
                        <br/>
                        Sigamos el ejemplo de personas como Marsha P. Johnson, Tim Cook,
                        Ada Lovelace, Nancy Cárdenas. Nunca paremos de aprender y compartir.
                        No permitamos que sus voces se apaguen. ¿Te unes a esta
                        aventura?
                    </p>
                </div>
            </div>
        </Layout>
    )
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        AboutMe: PropTypes.object.isRequired,
    }).isRequired,
}

const AboutMeQuery = props => (
    <StaticQuery
        query={graphql`
            query ImagesAbout {
                AboutMe: file(relativePath: { eq: "aboutme.jpg" }) {
                    childImageSharp{
                        fluid(maxWidth: 1500){
                            src
                        }
                    }
                }
            }
        `}
        render={data => <AboutPage data={data} {...props} />}
    />
)

export default AboutMeQuery
