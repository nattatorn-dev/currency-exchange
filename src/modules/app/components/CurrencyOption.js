import React from 'react'
import { url } from 'helpers'

import { DropdownCurrencyImage } from 'shared'

CurrencyOption.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  isDisabled: React.PropTypes.bool,
  isFocused: React.PropTypes.bool,
  isSelected: React.PropTypes.bool,
  onFocus: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  option: React.PropTypes.object.isRequired,
}

function CurrencyOption (
  {
    children,
    className,
    isDisabled,
    isFocused,
    isSelected,
    onFocus,
    onSelect,
    option,
  },
) {
  const handleMouseDown = event => {
    event.preventDefault()
    event.stopPropagation()
    onSelect( option, event )
  }

  const handleMouseEnter = event => {
    onFocus( option, event )
  }

  const handleMouseMove = event => {
    if ( isFocused ) return
    onFocus( option, event )
  }

  return (
    <div
      className={className}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      title={option.label}
    >
      <DropdownCurrencyImage image={option.label} size={'25px'}>
        <div style={{ margin: '-5px 35px 0 40px' }}>
          {option.label}
        </div>
      </DropdownCurrencyImage>
    </div>
  )
}

export default CurrencyOption
