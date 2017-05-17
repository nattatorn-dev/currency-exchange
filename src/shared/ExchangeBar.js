import React from 'react'
import Slider from 'react-filters/dist/Slider'

import OptionBar from 'shared/OptionBar'

ExchangeBar.propTypes = {
  actions: React.PropTypes.objectOf( React.PropTypes.func.isRequired ).isRequired,
  controller: React.PropTypes.object.isRequired,
  setting: React.PropTypes.object.isRequired,
}

function ExchangeBar ( {
  setting,
  actions: { updateSetting },
  controller: { sliderFractionDigits: { max, min, step } },
  setting: { currentFractionDigits },
} ) {
  const handleChange = data => {
    updateSetting( {
      ...setting,
      currentFractionDigits: data.value,
    } )
  }

  return (
    <OptionBar>
      <div style={{ width: '100%' }}>
        <Slider
          max={max}
          min={min}
          name={'steps'}
          onChange={handleChange}
          showSteps
          step={step}
          value={currentFractionDigits}
        />
      </div>
    </OptionBar>
  )
}

export default ExchangeBar
