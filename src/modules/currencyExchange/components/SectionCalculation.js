import React      from 'react'
import numbro     from 'numbro'
import { number } from 'services'

SectionCalculation.propTypes = {
  firstBank: React.PropTypes.object.isRequired,
  setting: React.PropTypes.object.isRequired,
}

function SectionCalculation ( { firstBank, setting } ) {
  const currentLang = setting.langs[ setting.currentLang ].messages

  return (
    <td colSpan="4">
      <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <div style={{ marginBottom: '10px' }}>
          <h4>
            {currentLang.BANK_TABLE_COL_CALCULATION_LABEL}
          </h4>
        </div>
        <div>
          <ul
            style={{
              listStyleType: 'none',
              fontSize: '16px',
              color: 'dimgrey',
            }}
          >
            <li>
              <div>
                <p>
                  {
                    `${ currentLang.BANK_TABLE_COL_CALCULATION_BUY }
                    ${ number.isNumber( number.mathRound( firstBank.calSell, 6 ) ) }
                    ${ firstBank.currencyDetails.symbol }`
                  }
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  {
                    `${ currentLang.BANK_TABLE_COL_CALCULATION_SELL }
                    ${ number.isNumber( number.mathRound( firstBank.calBuy, 6 ) ) }
                    ${ firstBank.currencyDetails.symbol }`
                  }
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </td>
  )
}

export default SectionCalculation
