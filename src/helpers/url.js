/**
   * @param  {[string]}    currencyAcronym       | 'JPY' |
   * @return {[string]}    string                | '../../assets/images/currencies/JPY.svg' | return url
   */
const currency = currencyAcronym =>
  `url(${ require( `../../assets/images/currencies/${ currencyAcronym }.svg` ) } )`

/**
   * @param  {[string]}    name          | 'Kanit' | font-family name
   * @return {[string]}    string        | '../../assets/fonts/Kanit/Kanit.ttf' | return url
   */
const font = name => `url(require( '../../assets/fonts/Kanit/${ name }.ttf' )  )`

/**
   * @param  {[string]}    bank          | 'AYUDHYA' | bank name
   * @return {[string]}    string        | '#fec43b' | return color
   */
const matchingBankColor = bank => {
  if ( bank.indexOf( 'AYUDHYA' ) !== -1 ) {
    return '#fec43b'
  } else if ( bank.indexOf( 'GOVERNMENT' ) !== -1 ) {
    return '#eb198d'
  } else if ( bank.indexOf( 'THAILAND' ) !== -1 ) {
    return '#184615'
  } else if ( bank.indexOf( 'KASIKORNBANK' ) !== -1 ) {
    return '#138f2d'
  } else if ( bank.indexOf( 'KRUNGTHAI' ) !== -1 ) {
    return '#1ba5e1'
  } else if ( bank.indexOf( 'SIAM' ) !== -1 ) {
    return '#4e2e7f'
  }
  return null
}

/**
   * @param  {[string]}    bank          | 'AYUDHYA' | bank name
   * @return {[string]}    string        | '../../assets/images/banks/BAY.svg' | return url
   */
const matchingBankIcon = bank => {
  if ( bank.indexOf( 'AYUDHYA' ) !== -1 ) {
    return `url(${ require( '../../assets/images/banks/BAY.svg' ) } )`
  } else if ( bank.indexOf( 'GOVERNMENT' ) !== -1 ) {
    return `url(${ require( '../../assets/images/banks/GSB.svg' ) } )`
  } else if ( bank.indexOf( 'THAILAND' ) !== -1 ) {
    return `url(${ require( '../../assets/images/banks/IBANK.svg' ) } )`
  } else if ( bank.indexOf( 'KASIKORNBANK' ) !== -1 ) {
    return `url(${ require( '../../assets/images/banks/KBANK.svg' ) } )`
  } else if ( bank.indexOf( 'KRUNGTHAI' ) !== -1 ) {
    return `url(${ require( '../../assets/images/banks/KTB.svg' ) } )`
  } else if ( bank.indexOf( 'SIAM' ) !== -1 ) {
    return `url(${ require( '../../assets/images/banks/SCB.svg' ) } )`
  }
  return null
}

/**
   * @param  {[number]}    number        | 1 | number
   * @return {[string]}    string        | '../../assets/images/numbers/1.svg | return url
   */
const number = number =>
  `url(${ require( `../../assets/images/numbers/${ number }.svg` ) })`

export { currency, font, matchingBankColor, matchingBankIcon, number }
