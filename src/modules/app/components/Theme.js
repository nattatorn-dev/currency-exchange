import React from 'react'
import { ThemeProvider } from 'styled-components'

Theme.propTypes = {
  children: React.PropTypes.object.isRequired,
  setting: React.PropTypes.object.isRequired,
}

function Theme ( { children, setting } ) {
  return (
    <ThemeProvider theme={setting}>
      {children}
    </ThemeProvider>
  )
}

export default Theme
