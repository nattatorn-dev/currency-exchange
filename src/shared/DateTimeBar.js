import React         from 'react'
import { Circle }    from 'rc-progress'
import { withTheme } from 'styled-components'
import { datetime }  from 'services'

DateTimeBar.propTypes = {
  date: React.PropTypes.string.isRequired,
  delay: React.PropTypes.object.isRequired,
  theme: React.PropTypes.object.isRequired,
}

function DateTimeBar ( { date, delay, theme } ) {
  const renderDateTime = () =>
    theme.lang === 'th'
      ? datetime.thaiDateFormat( date )
      : datetime.dateFormat( date )
  return (
    <div>
      <span>
        {renderDateTime()}
      </span>
      <div style={{ width: 40 }}>
        <Circle strokeWidth="10" percent={100 * delay.fetchBanks / 60} />
        <div
          style={{
            position: 'absolute',
            top: '88px',
          }}
        >
          {delay.fetchBanks}
        </div>
      </div>
    </div>
  )
}

export default withTheme( DateTimeBar )
