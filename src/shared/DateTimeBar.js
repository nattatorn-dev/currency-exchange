import React from 'react'
import { Circle } from 'rc-progress'
import { datetime } from 'services'

import OptionBar from 'shared/OptionBar'

DateTimeBar.propTypes = {
  date: React.PropTypes.string.isRequired,
  delay: React.PropTypes.object.isRequired,
  setting: React.PropTypes.object.isRequired,
}

function DateTimeBar ( props ) {
  const { setting: { currentLang }, date, delay } = props
  const renderDateTime = () =>
    currentLang === 'th'
      ? datetime.thaiDateFormat( date )
      : datetime.dateFormat( date )
  return (
    <OptionBar>
      <p>
        {renderDateTime()}
      </p>
      <div style={{ width: '40px', height: '40px' }} placeholder="auto refresh">
        <Circle
          trailWidth="4"
          strokeWidth="10"
          percent={100 * delay.fetchBanks / 60}
        />
        <div
          style={{
            position: 'relative',
            right: '-12px',
            textAlign: 'center',
            top: '-30px',
            width: '16px',
          }}
        >
          {delay.fetchBanks}
        </div>
      </div>
    </OptionBar>
  )
}

export default DateTimeBar
