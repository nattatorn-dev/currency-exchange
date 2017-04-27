import React         from 'react'
import { withTheme } from 'styled-components'

const Footer = ( { theme: { themes, currentTheme } } ) => (
  <footer>
    <div
      style={{
        borderTop: `1px solid ${ themes[ currentTheme ].borderPrimary }`,
        textAlign: 'center',
        padding: '1rem 0',
        background: themes[ currentTheme ].backgroundColorPrimary,
        color: themes[ currentTheme ].fontColorPrimary,
      }}
    >
      <div>
        <small>
          Copyright © 2017
          {' '}
          <span style={{ color: themes[ currentTheme ].fontColorHighlight }}>
            Currency Exchange.
          </span>
          {' '}
          All rights reserved.
        </small>
      </div>
    </div>
  </footer>
)

export default withTheme( Footer )
