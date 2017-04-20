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
    ( theme.lang === 'th'
      ? datetime.thaiDateFormat( date )
      : datetime.dateFormat( date ) )
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px auto',
        paddingBottom: '10px',
        paddingTop: '10px',
        width: '100%',
      }}
    >
      <p>
        {renderDateTime()}
      </p>
      <div style={{ width: '40px', height: '40px' }} placeholder="auto refresh">
        <Circle strokeWidth="10" percent={100 * delay.fetchBanks / 60} />
        <div
          style={{
            position: 'relative',
            top: '-30px',
            right: '-12px',
            width: '16px',
            textAlign: 'center',
          }}
        >
          {delay.fetchBanks}
        </div>
      </div>
    </div>
  )
}

export default withTheme( DateTimeBar )
