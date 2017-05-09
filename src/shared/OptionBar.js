import React from 'react'
import { withTheme } from 'styled-components'

import Row from 'shared/Row'

OptionBar.propTypes = {
  children: React.PropTypes.oneOfType( [
    React.PropTypes.element,
    React.PropTypes.array,
  ] ).isRequired,
  theme: React.PropTypes.object.isRequired,
}

function OptionBar ( { theme: { currentTheme, themes }, children } ) {
  return (
    <Row>
      <div
        style={{
          borderTop: `1px solid ${ themes[ currentTheme ].borderPrimary }`,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0px auto',
          padding: '10px 0',
          width: '100%',
        }}
      >
        {children}
      </div>
    </Row>
  )
}

export default withTheme( OptionBar )
