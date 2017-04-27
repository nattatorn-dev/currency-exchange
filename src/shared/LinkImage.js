import React         from 'react'
import { IndexLink } from 'react-router'
import { withTheme } from 'styled-components'

LinkImage.propTypes = {
  link: React.PropTypes.string,
  theme: React.PropTypes.object.isRequired,
  width: React.PropTypes.object,
}

function LinkImage ( {
  theme: { themes, currentTheme },
  link = '/',
  style = { width: '46px' },
} ) {
  return (
    <IndexLink to={{ link }}>
      <img
        alt="logo"
        style={style}
        src={`${ require( `../../assets/images/${ themes[ currentTheme ].logo }.svg` ) }`}
      />
    </IndexLink>
  )
}

export default withTheme( LinkImage )
