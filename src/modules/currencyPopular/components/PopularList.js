import React                       from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import { url }                     from 'helpers'
import { number }                  from 'services'

import {
  BankImageCircle,
  BankLabel,
  ButtonLoader,
  SectionDetail,
  SectionMain,
  TdBorder,
  TdBorderHeader,
  TdBorderNumber,
}                                   from 'shared'

PopularList.propTypes = {
  actions: React.PropTypes.shape( {
    toggleShowCurrencyPopular: React.PropTypes.func.isRequired,
  } ),
  banks: React.PropTypes.array.isRequired,
  loadingLabel: React.PropTypes.string.isRequired,
  setting: React.PropTypes.object.isRequired,
}

PopularList.defaultProps = {
  loadingLabel: 'Loading...',
}

function PopularList (
  { actions: { toggleShowCurrencyPopular }, banks, loadingLabel, setting },
) {
  const styleImage = e => ( {
    backgroundImage: url.currency( e.currencyDetails.code ),
    height: '30px',
    width: '30px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '145% 110%',
    borderRadius: '150px',
    boxShadow: '0 0 8px rgba(0, 0, 0, .2)',
  } )

  const extendName = ( { extendName } ) => extendName ? ` : ${ extendName }` : null
  const listCurrencies = ( { data } ) =>
    data.map( ( e, k ) => (
      <tr key={k}>
        <TdBorder>
          <div style={styleImage( e )}>
            <div style={{ marginLeft: '45px', width: '170px' }}>
              <strong style={{ fontWeight: '400' }}>
                {e.currencyDetails.code}
              </strong>
              <div style={{ color: 'gray', marginTop: '-2px' }}>
                <SectionDetail>
                  {e.currencyDetails.name}{extendName( e )}
                </SectionDetail>
              </div>
            </div>
          </div>
        </TdBorder>
        <TdBorderNumber>{number.isNumber( e.buy )}</TdBorderNumber>
        <TdBorderNumber>{number.isNumber( e.sell )}</TdBorderNumber>
      </tr>
    ) )

  const renderToggle = ( { isTotal } ) => isTotal ? 'show less' : 'show more'
  const currLang = setting.langs[ setting.lang ].messages

  const listBanks = () =>
    banks.map( ( e, k ) => (
      <StickyContainer key={`stick-${ k }`} style={{ zIndex: 2 }}>
        <div key={k}>
          <Sticky style={{ zIndex: 1 }}>
            <SectionMain>
              <BankImageCircle bank={e.bankNameEng}>
                <BankLabel>{e.bankNameThai}</BankLabel>
                <BankLabel>{e.bankNameEng}</BankLabel>
              </BankImageCircle>
            </SectionMain>
          </Sticky>
          <table style={{ border: 1, width: '100%' }}>
            <thead>
              <tr>
                <TdBorderHeader>
                  {currLang.BANK_TABLE_COL_CURRENCIES}
                </TdBorderHeader>
                <TdBorderHeader align={'right'}>
                  {currLang.BANK_TABLE_COL_SELL}
                </TdBorderHeader>
                <TdBorderHeader align={'right'}>
                  {currLang.BANK_TABLE_COL_BUY}
                </TdBorderHeader>
              </tr>
            </thead>
            <tbody>
              {listCurrencies( e )}
              <tr>
                <TdBorder align={'center'} colSpan="4">
                  <a
                    data-id={k}
                    style={{ cursor: 'pointer', color: 'cornflowerblue' }}
                    onClick={e =>
                      toggleShowCurrencyPopular( +e.currentTarget.dataset.id )}
                  >
                    {renderToggle( e )}
                  </a>
                </TdBorder>
              </tr>
            </tbody>
          </table>
        </div>
      </StickyContainer>
    ) )

  return banks.length === 0
    ? <p>
        {loadingLabel}
      </p>
    : <div>
        {listBanks()}
      </div>
}

export default PopularList
