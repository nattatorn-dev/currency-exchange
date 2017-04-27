import React                     from 'react'
import { url }                   from 'helpers'
import { withTheme }             from 'styled-components'

import { DropdownCurrencyImage } from 'shared'

CurrencyValue.propTypes = {
  children: React.PropTypes.node,
  disabled: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  theme: React.PropTypes.object.isRequired,
  value: React.PropTypes.object,
}

function CurrencyValue ( {
  children,
  disabled,
  placeholder,
  theme: { themes, currentTheme },
  value,
} ) {
  const styleDropdown = {
    border: `1px solid ${ themes[ currentTheme ].inputBorderColorPrimary }`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    color: themes[ currentTheme ].fontColorPrimary,
    left: '0',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: '10px 52px 8px 10px',
    position: 'absolute',
    right: '-15px',
    textOverflow: 'ellipsis',
    top: '0',
    whiteSpace: 'nowrap',
  }
  const styleIsDisabled = disabled && currentTheme === 'white'
    ? styleDropdown
    : {
      ...styleDropdown,
      backgroundColor: themes[ currentTheme ].inputBackgroundColorPrimary,
    }
  return (
    <div style={styleIsDisabled} title={value.title}>
      <span>
        <DropdownCurrencyImage image={value.label} size={'25px'} />
        <div style={{ margin: '-20px 35px 0 40px' }}>
          <span>{value.label}</span>
        </div>
      </span>
    </div>
  )
}

export default withTheme( CurrencyValue )
