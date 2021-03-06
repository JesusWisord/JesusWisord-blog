import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { 
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaRss,
} from 'react-icons/fa'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'
import '../../styles/styles.scss'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">
                    {`${site.codeinjection_styles}`}
                </style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header className="site-head" >
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        <img className="site-logo" src="/layout/Minified Color.png" alt={site.title} />
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    { site.twitter && 
                                    <a 
                                        href={ twitterUrl } 
                                        className="site-nav-item" 
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                        <FaTwitter className="site-nav-icon" />
                                    </a>
                                    }
                                    <a 
                                        href="https://github.com/JesusWisord" 
                                        className="site-nav-item" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="site-nav-icon" />
                                    </a>
                                    <a 
                                        href="https://instagram.com/JesusWisord" 
                                        className="site-nav-item" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram className="site-nav-icon" />
                                    </a>
                                    <a 
                                        className="site-nav-item" 
                                        href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } 
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <FaRss className="site-nav-icon" />
                                    </a>
                                </div>
                            </div>
                            {isHome ? 
                                <div className="site-banner">
                                    <img src="/layout/Blog Color.png" alt="Cover"/>
                                </div> :
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    {/* The navigation items as setup in Ghost */}
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2019 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
