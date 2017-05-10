import React, { Component, PropTypes } from 'react'
import Slider from 'react-filters/dist/Slider'

import OptionBar from 'shared/OptionBar'

class ExchangeBar extends Component {
  static defaultProps = {
    value: 0,
  }

  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  state = {
    value: this.props.setting.currentFractionDigits,
  }

  handleChange = data => {
    this.setState( {
      value: data.value,
    } )
  }

  render () {
    return (
      <OptionBar>
        <div style={{ width: '100%' }}>
          <Slider
            name={'steps'}
            onChange={this.handleChange}
            value={this.state.value}
            step={1}
            min={0}
            max={6}
            showSteps
          />
        </div>
      </OptionBar>
    )
  }
}

export default ExchangeBar
