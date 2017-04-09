import numbro from 'numbro'

/**
   * @param  {[float]}    number       | 100000 |
   * @param  {[number]}   digit        | 5 |
   * @return {[float]}    number       | 100000.00000 | return new number with format
   */
const mathRound = ( number, digit = 2 ) =>
  numbro( number ).format( `0,0.${ '0'.repeat( digit ) }` )

/**
   * @param  {[float]}    number       | 100000 |
   * @param  {[any]}      replace      | '-' |
   * @return {[float]}    number       | 100000 or '-' | return number check param is type number
   */
const isNumber = ( number, replace = '-' ) =>
  number &&
    typeof +number === 'number' &&
    !isNaN( Number( numbro().unformat( number ) ) ) &&
    numbro().unformat( number ) !== 0
    ? number
    : replace

export { mathRound, isNumber }
