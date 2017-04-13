import React, { Component, PropTypes } from 'react'
import Select                          from 'react-select'

import CurrencyOption                  from './CurrencyOption'
import CurrencyValue                   from './CurrencyValue'

const arrowRenderer = () => <span>+</span>

const DropdownCurrency = React.createClass( {
  propTypes: {
    hint: React.PropTypes.string,
    initialState: React.PropTypes.object,
  },

  getInitialState () {
    return this.props.initialState
  },

  setValue ( value ) {
    const { router: { params: { name } }, onChange } = this.props
    this.setState( { value } )
    onChange( `${ value.value }/${ name }` )
  },

  render () {
    const placeholder = <span>Select Currency</span>

    return (
      <div className="section">
        <Select
          clearable={this.state.clearable}
          disabled={this.state.disabled}
          arrowRenderer={arrowRenderer}
          onChange={this.setValue}
          optionComponent={CurrencyOption}
          options={this.props.data}
          placeholder={placeholder}
          value={this.state.value}
          valueComponent={CurrencyValue}
        />
      </div>
    )
  },
} )

export default DropdownCurrency
