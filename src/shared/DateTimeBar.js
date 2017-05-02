import React         from 'react'
import { Circle }    from 'rc-progress'
import { withTheme } from 'styled-components'
import { datetime }  from 'services'

import Row           from 'shared/Row'

DateTimeBar.propTypes = {
  date: React.PropTypes.string.isRequired,
  delay: React.PropTypes.object.isRequired,
  theme: React.PropTypes.object.isRequired,
}

function DateTimeBar ( {
  date,
  delay,
  setting: { currentLang, currentTheme, themes },
} ) {
  const renderDateTime = () =>
    ( currentLang === 'th'
      ? datetime.thaiDateFormat( date )
      : datetime.dateFormat( date ) )
  return (
    <Row>
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
          <Circle trailWidth="4" strokeWidth="10" percent={100 * delay.fetchBanks / 60} />
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
    </Row>
  )
}

export default withTheme( DateTimeBar )
