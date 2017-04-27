import React              from 'react'
import { url }            from 'helpers'
import { number }         from 'services'

import SectionCalculation from './SectionCalculation'
import {
  BankImageCircle,
  BankLabel,
  NumberImageCircle,
  SectionMain,
  TdBorder,
  TdBorderHeader,
  TdBorderNumber,
}                          from 'shared'

ComparisonList.propTypes = {
  banks: React.PropTypes.array.isRequired,
  setting: React.PropTypes.object.isRequired,
}

function ComparisonList ( {
  banks,
  banks: [ firstBank ],
  loadingLabel,
  setting,
  setting: { langs, currentLang, themes, currentTheme },
} ) {
  const renderHighLevel = number =>
    ( number < 4 ? <NumberImageCircle number={number} size={'25px'} /> : null )
  const currLang = langs[ currentLang ].messages
  const listCurrencies = (
    { bankNameThai, bankNameEng, data: [ firstBank ] },
    k,
  ) => (
    <tbody key={`tbody-${ bankNameEng }`}>
      <tr key={bankNameEng}>
        <TdBorder>
          <BankImageCircle bank={bankNameEng}>
            <div style={{ marginLeft: '45px', width: '170px' }}>
              <strong style={{ fontWeight: '600' }}>
                {bankNameThai}
              </strong>
              <div
                style={{
                  width: '250px',
                  color: 'gray',
                  marginTop: '-2px',
                  fontSize: '10.5px',
                }}
              >
                <div>
                  {bankNameEng}
                </div>
              </div>
            </div>
          </BankImageCircle>
          {renderHighLevel( k + 1 )}
        </TdBorder>
        <TdBorderNumber>
          {number.isNumber( firstBank.buy )}
        </TdBorderNumber>
        <TdBorderNumber>
          {number.isNumber( firstBank.sell )}
        </TdBorderNumber>
      </tr>
      <tr
        key={`calculation-${ bankNameEng }`}
        style={{
          backgroundColor: themes[ currentTheme ].backgroundColorDetail,
          textAlign: 'right',
          letterSpacing: '0.5px',
        }}
      >
        <SectionCalculation firstBank={firstBank} setting={setting} />
      </tr>
    </tbody>
  )
  const styleCurrencyImage = () => ( {
    backgroundImage: url.currency( firstBank.currencyDetails.code ),
    height: '38px',
    width: '38px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '145% 110%',
    borderRadius: '150px',
    boxShadow: '0 0 8px rgba(0, 0, 0, .2)',
  } )
  const listBanks = () => (
    <div>
      <SectionMain>
        <div style={styleCurrencyImage( banks )}>
          <div
            style={{ marginTop: '5px', width: '170px', position: 'absolute' }}
          >
            <div style={{ marginLeft: '50px' }}>
              <strong style={{ fontWeight: '600' }}>
                {firstBank.currencyDetails.code}
              </strong>
            </div>
            <div style={{ marginLeft: '50px' }}>
              {firstBank.currencyDetails.name}
            </div>
          </div>
        </div>
      </SectionMain>
      <table style={{ border: 1, width: '100%' }}>
        <thead>
          <tr>
            <TdBorderHeader>
              {currLang.BANK_TABLE_COL_CURRENCIES}
            </TdBorderHeader>
            <TdBorderHeader align="right">
              {currLang.BANK_TABLE_COL_SELL}
            </TdBorderHeader>
            <TdBorderHeader align="right">
              {currLang.BANK_TABLE_COL_BUY}
            </TdBorderHeader>
          </tr>
        </thead>
        {banks.map( ( e, k ) => listCurrencies( e, k ) )}
      </table>
    </div>
  )

  return (
    <div>
      {listBanks()}
    </div>
  )
}

export default ComparisonList
