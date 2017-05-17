import React, { Component, PropTypes } from 'react'
import ReactDOM                        from 'react-dom/server'
import serialize                       from 'serialize-javascript'
import Helmet                          from 'react-helmet'
import config                          from 'config'
import styleSheet                      from 'styled-components/lib/models/StyleSheet'

class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
  }

  render () {
    const { assets, component, store } = this.props
    const content = component ? ReactDOM.renderToStaticMarkup( component ) : ''
    const head = Helmet.rewind()
    const styles = styleSheet.rules().map( rule => rule.cssText ).join( '\n' )
    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          <style>
            {styles}
          </style>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Athiti|Kanit"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {Object.keys( assets.styles ).map( ( style, key ) => (
            <link
              href={assets.styles[ style ]}
              key={key}
              media="screen, projection"
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
            />
          ) )}

        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__data=${ serialize( store.getState() ) };`,
            }}
            charSet="UTF-8"
          />
          <script src={assets.javascript.main} charSet="UTF-8" />
        </body>
      </html>
    )
  }
}

export default Html
