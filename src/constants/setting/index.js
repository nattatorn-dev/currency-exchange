import { langs } from './langs'
import { themes } from './themes'
import { fontStyles } from './fontStyles'
import { fontFamilies } from './fontFamilies'

export const setting = {
  layout: '', // bank dill down, bank column
  popularCurrenciesLists: [ 'USD', 'GBP', 'EUR', 'JPY', 'CNY' ], // relate dropdowncurrencies
  popularBanksLists: [ 'KBANK' ],
  dropdownCurrencies: 'THB',
  numberDigit: 5,
  lang: 'th', // th, en
  langs,
  theme: 'white',
  themes,
  fontStyle: 'normal',
  fontStyles,
  fontFamily: 'arial',
  fontFamilies,
}
