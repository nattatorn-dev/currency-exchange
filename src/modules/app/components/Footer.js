import React from 'react'
import { withTheme } from 'styled-components'

const Footer = ( { theme } ) => (
  <footer>
    <div
      style={{
        borderTop: '1px solid #3f3f3f',
        textAlign: 'center',
        padding: '1rem 0',
        background: theme.themes[ theme.theme ].backgroundColorPrimary,
        color: theme.themes[ theme.theme ].fontColorPrimary,
      }}
    >
      <div>
        <small>
          Copyright © 2017
          {' '}
          <span style={{ color: theme.themes[ theme.theme ].fontColorHighlight }}>
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
