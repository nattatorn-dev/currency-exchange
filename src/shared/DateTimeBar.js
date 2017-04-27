import React         from 'react'
import { Circle }    from 'rc-progress'
import { withTheme } from 'styled-components'
import { datetime }  from 'services'

DateTimeBar.propTypes = {
  date: React.PropTypes.string.isRequired,
  delay: React.PropTypes.object.isRequired,
  theme: React.PropTypes.object.isRequired,
}

function DateTimeBar ( {
  date,
  delay,
  theme: { currentLang, currentTheme, themes },
} ) {
  const renderDateTime = () =>
    ( currentLang === 'th'
      ? datetime.thaiDateFormat( date )
      : datetime.dateFormat( date ) )
  return (
    <div
      style={{
        borderTop: `1px solid ${ themes[ currentTheme ].borderPrimary }`,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px auto',
        padding: '10px 0',
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
            right: '-12px',
            textAlign: 'center',
            top: '-30px',
            width: '16px',
          }}
        >
          {delay.fetchBanks}
        </div>
      </div>
    </div>
  )
}

export default withTheme( DateTimeBar )
